'use strict';

const core = angular.module('cortex.core', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';
import fixedHeightDirective from './directives/fixed-height/fixed-height.directive';
import fileChooserDirective from './directives/file-chooser/file-chooser.directive';
import requireRolesDirective from './directives/require-roles/require-roles.directive';
import compareToDirective from './directives/compare-to/compare-to.directive';
import userAvatarDirective from './directives/user-avatar/user-avatar.directive';
import tlpDirective from './directives/tlp/tlp.directive';
import autofocusDirective from './directives/autofocus/autofocus.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';

import notificationService from './services/common/NotificationService';
import streamService from './services/common/StreamService';
import versionService from './services/common/VersionService';
import utilsService from './services/common/UtilsService';

import fangFilter from './filters/fang';

import AuthService from './services/common/AuthService';
import HtmlSanitizer from './services/common/HtmlSanitizer';
import UserService from './services/common/UserService';
import SearchService from './services/common/SearchService';

import ModalService from './services/common/ModalService';

core
  .service('AuthService', AuthService)
  .service('HtmlSanitizer', HtmlSanitizer)
  .service('SearchService', SearchService)
  .service('UserService', UserService)
  .service('ModalService', ModalService);

validationTestDirective(core);
fixedHeightDirective(core);
fileChooserDirective(core);
requireRolesDirective(core);
compareToDirective(core);
userAvatarDirective(core);
tlpDirective(core);
autofocusDirective(core);

/* Common services */

notificationService(core);
streamService(core);
versionService(core);
utilsService(core);

/* App services */
constants(core);
storeFactory(core);
resolverProvider(core);

/* Filters */
fangFilter(core);

export default core;
