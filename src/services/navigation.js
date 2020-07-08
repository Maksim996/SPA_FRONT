import { ROLES } from '@/utils/constants';

export default {
  getItems(user) {

    // item
    const MyProfile = {
      title: 'MyProfile',
      icon: 'mdi-account-circle',
      route: 'MyProfile',
    };
    const CreateDirector = {
      title: 'CreateDirector',
      icon: 'mdi-account-plus',
      route: 'CreateDirector',
    };
    const ListDirectors = {
      title: 'ListDirectors',
      icon: 'mdi-clipboard-list',
      route: 'ListDirectors',
    };

    // items
    const CreateDirectorAndOptions = {
      title: 'Roots',
      icon: 'mdi-account-multiple',
      submenu: [
        CreateDirector,
        ListDirectors,
      ],
    };

    let rows = [];
    if (user) {
      rows.push(MyProfile);

      switch (user.role_id) {
        case ROLES.ID.SuperRoot:
          rows.push(
            CreateDirectorAndOptions
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
