import { ActionHandlersService } from './action-handlers.service';
import { TestBed } from '@angular/core/testing';
import { PlatformLocation, APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from '../../services/pure/notification.service';
import { getBaseHref } from '../../getBaseHref';
import { LoggerService } from '../../services/logging/logger.service';
import { ConsoleLoggerService } from '../../services/logging/console-logger.service';
import { IconUrlResolverService } from '../../services/pure/icon-url-resolver.service';
import { ClientFileSystemService } from '../../services/pure/client-filesystem.service';
import { OptimisticFilesystemService } from '../../services/pure/optimistic-filesystem.service';
import { ServerFilesystemProviderService } from '../../services/pure/server-filesystem.service';
import { FileManagerConfig } from '../../configuration/client-configuration';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

class SnackStub {
  notify(msg: string, title?: string, isError?: boolean) {}
  notifyCancelled() {}
}

class DialogStub {
  open(any?: any) {}
}

describe('', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: MatSnackBar, useClass: SnackStub },
        { provide: MatDialog, useClass: DialogStub },
        ServerFilesystemProviderService,
        NotificationService,
        {
          provide: APP_BASE_HREF,
          useFactory: getBaseHref,
          deps: [PlatformLocation]
        },
        { provide: LoggerService, useClass: ConsoleLoggerService },
        IconUrlResolverService,
        ClientFileSystemService,
        OptimisticFilesystemService,
        ActionHandlersService
      ]
    });
  });

  it('should creates and lists 2 folders', async () => {
    const serverFilesystem: ServerFilesystemProviderService = TestBed.get(
      ServerFilesystemProviderService
    );
    const actionHandlers: ActionHandlersService = TestBed.get(
      ActionHandlersService
    );
    const config: FileManagerConfig = {
      virtualRoot: '/'
    } as any;
    actionHandlers.init(serverFilesystem, config);
    actionHandlers.OnNewFolder('/dir');
    // expect(2).(2);
  }, 60000);
});
