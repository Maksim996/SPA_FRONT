import { ROLES } from '@/utils/constants';

export default {
  getItems(user) {

    // item
    const MyProfile = {
      title: 'MyProfile',
      icon: 'mdi-account-circle',
      route: 'MyProfile',
    };
    const CreateRoot = {
      title: 'CreateRoot',
      icon: 'mdi-account-plus',
      route: 'CreateRoot',
    };
    const RootsList = {
      title: 'RootList',
      icon: 'mdi-clipboard-list',
      route: 'RootsList',
    };
    // items
    const CreateRootAndOptions = {
      title: 'Roots',
      icon: 'mdi-account-multiple',
      submenu: [
        CreateRoot,
        RootsList,
      ],
    };

    let rows = [];
    if (user) {
      rows.push(MyProfile);

      switch (user.role_id) {
        case ROLES.ID.SuperRoot:
          rows.push(
            CreateRootAndOptions
          );
          break;

        case ROLES.ID.Root:

          break;

        case ROLES.ID.Admin:

          break;
      }
    }
    return rows;
  }
}
