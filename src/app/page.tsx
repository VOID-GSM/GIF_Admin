import MainView from '@/view/main/ui/MainView';
import AdminLayout from './(admin)/layout';
import MasterLayout from './(master)/layout';

export default function RootPage() {
  const role =  'MASTER' as 'ADMIN' | 'MASTER';

  return role === 'MASTER' ? (
    <MasterLayout>
      <MainView role="MASTER" />
    </MasterLayout>
  ) : (
    <AdminLayout>
      <MainView role="ADMIN" />
    </AdminLayout>
  );
}
