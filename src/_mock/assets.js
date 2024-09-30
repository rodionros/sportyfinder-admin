import { faker } from '@faker-js/faker';

import { BasicStatus, PermissionType } from '#/enum';

/**
 * Organization data mock
 */
export const ORG_LIST = [
  {
    id: '1',
    name: 'East China Branch',
    status: 'enable',
    desc: faker.lorem.words(),
    order: 1,
    children: [
      { id: '1-1', name: 'R&D Department', status: 'disable', desc: '', order: 1 },
      { id: '1-2', name: 'Marketing Department', status: 'enable', desc: '', order: 2 },
      { id: '1-3', name: 'Finance Department', status: 'enable', desc: '', order: 3 },
    ],
  },
  {
    id: '2',
    name: 'South China Branch',
    status: 'enable',
    desc: faker.lorem.words(),
    order: 2,
    children: [
      { id: '2-1', name: 'R&D Department', status: 'disable', desc: '', order: 1 },
      { id: '2-2', name: 'Marketing Department', status: 'enable', desc: '', order: 2 },
      { id: '2-3', name: 'Finance Department', status: 'enable', desc: '', order: 3 },
    ],
  }
];

/**
 * User permission mock
 */
const DASHBOARD_PERMISSION = {
  id: '9100714781927703',
  parentId: '',
  label: 'sys.menu.dashboard',
  name: 'Dashboard',
  icon: 'ic-analysis',
  type: PermissionType.CATALOGUE,
  route: 'dashboard',
  order: 1,
  children: [
    {
      id: '8426999229400979',
      parentId: '9100714781927703',
      label: 'sys.menu.workbench',
      name: 'Workbench',
      type: PermissionType.MENU,
      route: 'workbench',
      component: '/dashboard/workbench/index.tsx',
    },
  ],
};

const ERRORS_PERMISSION = {
  id: '9406067785553476',
  parentId: '',
  label: 'sys.menu.error.index',
  name: 'Error',
  icon: 'bxs:error-alt',
  type: PermissionType.CATALOGUE,
  route: 'error',
  order: 6,
  children: [
    {
      id: '8557056851997154',
      parentId: '9406067785553476',
      label: 'sys.menu.error.403',
      name: '403',
      type: PermissionType.MENU,
      route: '403',
      component: '/sys/error/Page403.tsx',
    },
    {
      id: '5095669208159005',
      parentId: '9406067785553476',
      label: 'sys.menu.error.404',
      name: '404',
      type: PermissionType.MENU,
      route: '404',
      component: '/sys/error/Page404.tsx',
    },
    {
      id: '0225992135973772',
      parentId: '9406067785553476',
      label: 'sys.menu.error.500',
      name: '500',
      type: PermissionType.MENU,
      route: '500',
      component: '/sys/error/Page500.tsx',
    },
  ],
};


export const PERMISSION_LIST = [
  DASHBOARD_PERMISSION,
  ERRORS_PERMISSION,
];

/**
 * User role mock
 */
const ADMIN_ROLE = {
  id: '4281707933534332',
  name: 'Admin',
  label: 'admin',
  status: BasicStatus.ENABLE,
  order: 1,
  desc: 'Super Admin',
  permission: PERMISSION_LIST,
};
const TEST_ROLE = {
  id: '9931665660771476',
  name: 'Test',
  label: 'test',
  status: BasicStatus.ENABLE,
  order: 2,
  desc: 'test',
  permission: [DASHBOARD_PERMISSION],
};
export const ROLE_LIST = [ADMIN_ROLE, TEST_ROLE];

/**
 * User data mock
 */
export const DEFAULT_USER = {
  id: 'b34719e1-ce46-457e-9575-99505ecee828',
  username: 'admin',
  email: faker.internet.email(),
  avatar: faker.image.avatarGitHub(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  password: 'demo1234',
  role: ADMIN_ROLE,
  permissions: ADMIN_ROLE.permission,
};
export const TEST_USER = {
  id: 'efaa20ea-4dc5-47ee-a200-8a899be29494',
  username: 'test',
  password: 'demo1234',
  email: faker.internet.email(),
  avatar: faker.image.avatarGitHub(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  role: TEST_ROLE,
  permissions: TEST_ROLE.permission,
};
export const USER_LIST = [DEFAULT_USER, TEST_USER];
