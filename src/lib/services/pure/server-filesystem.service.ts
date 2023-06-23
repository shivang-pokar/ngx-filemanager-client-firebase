import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreTypes, FileSystemProvider } from '../../../core-types';
import { LoggerService } from '../logging/logger.service';
import { FileSystemRequestBuilder } from './server-filesystem-request';
import { EnsureNoTrailingSlash } from '../../utils/path-helpers';

@Injectable()
export class ServerFilesystemProviderService implements FileSystemProvider {
  private bucketname: string;
  private apiEndpoint: string;
  private isAdmin: boolean;

  private LOG_ID = Math.random().toString(32).slice(2, 10);

  constructor(private http: HttpClient, private logger: LoggerService) {}

  private makeAPIRequest(action: CoreTypes.FileManagerAction) {
    this.logger.info('makeAPIRequest', { action, context: this });

    return new FileSystemRequestBuilder(
      this.http,
      this.apiEndpoint,
      this.logger,
      this.LOG_ID
    ).AddBody({
      action: action,
      bucketname: this.bucketname,
      isAdmin: this.isAdmin,
    });
  }

  Initialize(config: {
    bucketname: string;
    apiEndpoint: string;
    isAdmin: boolean;
  }) {
    this.bucketname = config.bucketname;
    this.isAdmin = config.isAdmin;
    this.apiEndpoint = EnsureNoTrailingSlash(config.apiEndpoint);
  }

  List(path: string): Promise<CoreTypes.ResBodyList> {
    return this.makeAPIRequest('list')
      .PatchBody<CoreTypes.ReqBodyList>({
        path: path,
      })
      .POST();
  }

  CreateFolder(
    newPath: string,
    disableNoClobber?: boolean
  ): Promise<CoreTypes.ResBodyCreateFolder> {
    return this.makeAPIRequest('createFolder')
      .PatchBody<CoreTypes.ReqBodyCreateFolder>({
        newPath: newPath,
      })
      .POST();
  }

  Copy(
    singleFileName: string,
    newPath: string
  ): Promise<CoreTypes.ResBodyCopy> {
    return this.makeAPIRequest('copy')
      .PatchBody<CoreTypes.ReqBodyCopy>({
        singleFileName: singleFileName,
        newPath: newPath,
      })
      .POST();
  }

  Move(item: string, newPath: string): Promise<CoreTypes.ResBodyMove> {
    return this.makeAPIRequest('move')
      .PatchBody<CoreTypes.ReqBodyMove>({
        items: [item],
        newPath: newPath,
      })
      .POST();
  }

  Rename(item: string, newItemPath: string): Promise<CoreTypes.ResBodyRename> {
    return this.makeAPIRequest('rename')
      .PatchBody<CoreTypes.ReqBodyRename>({
        item: item,
        newItemPath: newItemPath,
      })
      .POST();
  }

  Edit(item: string, content: string): Promise<CoreTypes.ResBodyEdit> {
    return this.makeAPIRequest('edit')
      .PatchBody<CoreTypes.ReqBodyEdit>({
        item: item,
        content: content,
      })
      .POST();
  }

  Getcontent(item: string): Promise<CoreTypes.ResBodyGetContent> {
    return this.makeAPIRequest('getContent')
      .PatchBody<CoreTypes.ReqBodyEdit>({
        item: item,
      })
      .POST();
  }

  SetPermissions(
    item: string,
    role: CoreTypes.PermissionsRole,
    entity: CoreTypes.FilePermissionEntity,
    recursive?: boolean
  ): Promise<CoreTypes.ResBodySetPermissions> {
    return this.makeAPIRequest('changePermissions')
      .PatchBody<CoreTypes.ReqBodySetPermissions>({
        items: [item],
        role: role,
        entity: entity,
        recursive: recursive,
      })
      .POST();
  }

  MoveMultiple(
    items: string[],
    newPath: string
  ): Promise<CoreTypes.ResBodyMove> {
    return this.makeAPIRequest('move')
      .PatchBody<CoreTypes.ReqBodyMove>({
        items: items,
        newPath: newPath,
      })
      .POST();
  }

  CopyMultiple(
    items: string[],
    newPath: string
  ): Promise<CoreTypes.ResBodyCopy> {
    return this.makeAPIRequest('copy')
      .PatchBody<CoreTypes.ReqBodyCopy>({
        items: items,
        newPath: newPath,
      })
      .POST();
  }

  SetPermissionsMultiple(
    items: string[],
    role: CoreTypes.PermissionsRole,
    entity: CoreTypes.FilePermissionEntity,
    recursive?: boolean
  ): Promise<CoreTypes.ResBodySetPermissions> {
    return this.makeAPIRequest('changePermissions')
      .PatchBody<CoreTypes.ReqBodySetPermissions>({
        items: items,
        role: role,
        entity: entity,
        recursive: recursive,
      })
      .POST();
  }

  SetPermissionsObjectMultiple(
    items: string[],
    permissionsObj: CoreTypes.FilePermissionsObject,
    recursive?: boolean
  ): Promise<CoreTypes.ResBodySetPermissions> {
    return this.makeAPIRequest('changePermissionsObject')
      .PatchBody<CoreTypes.ReqBodySetPermissionsObject>({
        items: items,
        permissionsObj: permissionsObj,
        recursive: recursive,
      })
      .POST();
  }

  Remove(items: string[]): Promise<CoreTypes.ResBodyRemove> {
    return this.makeAPIRequest('remove')
      .PatchBody<CoreTypes.ReqBodyRemove>({
        items: items,
      })
      .POST();
  }

  GetSingle(item: string): Promise<CoreTypes.ResBodyGetSingle> {
    return this.makeAPIRequest('getSingle')
      .PatchBody<CoreTypes.ReqBodyGetSingle>({
        item: item,
      })
      .POST();
  }

  GetUploadApiUrl(currentPath: string): string {
    const uploadApiEndpoint =
      this.apiEndpoint +
      '/upload?' +
      'bucketname=' +
      this.bucketname +
      '&directoryPath=' +
      currentPath;
    return uploadApiEndpoint;
  }

  CloneProvider(): FileSystemProvider {
    return new ServerFilesystemProviderService(this.http, this.logger);
  }

  async CreateDownloadLink(file: CoreTypes.ResFile): Promise<string> {
    try {
      const response: CoreTypes.ResBodyGetSingle = await this.makeAPIRequest(
        'getSingle'
      )
        .PatchBody<CoreTypes.ReqBodyGetSingle>({
          item: file.fullPath,
        })
        .POST();
      const url = response.result.url;
      return url;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async Upload(item: string): Promise<boolean> {
    return null;
  }
}
