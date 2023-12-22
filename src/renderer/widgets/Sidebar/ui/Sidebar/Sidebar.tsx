import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';
import { FC, useRef } from 'react';

export interface SidebarProps {
  children?: any;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const toast = useRef<Toast>(null);
  const items: MenuItem[] = [
    {
      label: 'Options',
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
            toast.current?.show({
              severity: 'success',
              summary: 'Updated',
              detail: 'Data Updated',
              life: 3000,
            });
          },
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
            toast.current?.show({
              severity: 'warn',
              summary: 'Delete',
              detail: 'Data Deleted',
              life: 3000,
            });
          },
        },
      ],
    },
    {
      label: 'Links',
      items: [
        {
          label: 'React Website',
          icon: 'pi pi-external-link',
          url: 'https://reactjs.org/',
        },
        {
          label: 'Upload',
          icon: 'pi pi-upload',
          command: () => {
            return '/fileupload';
          },
        },
      ],
    },
  ];

  return (
    <aside data-testid="sidebar">
      <Toast ref={toast} />
      <Menu model={items} />
    </aside>
  );
};
