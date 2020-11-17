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
    const SettingMyProfile = {
      title: 'MyProfile',
      icon: 'mdi-account-settings',
      route: 'SettingMyProfile',
    };

    // items
    const CreateDirectorAndOptions = {
      title: 'Directors',
      icon: 'mdi-account-multiple',
      submenu: [
        ListDirectors,
        CreateDirector,
      ],
    };

    const SettingRoot = {
      title: 'Settings',
      icon: 'mdi-cog',
      submenu: [
        SettingMyProfile
      ],
    };

    let rows = [];
    if (user) {
      rows.push(MyProfile);

      switch (user.role_id) {
        case ROLES.ID.Root:
          rows.push(
            CreateDirectorAndOptions,
            SettingRoot
          );
          break;

        case ROLES.ID.Admin:

          break;
      }
    }
    return rows;
  }
}
