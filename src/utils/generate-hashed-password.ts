import { hashPassword } from '@/lib/login/manage-login';

(async () => {
  const password = '$RNj!\;hU7_9RQ1_-ilFM}8.Seg#B0Z'; // NÃO ESQUECER DE APAGAR SENHA DAQUI
  const hashedPassword = await hashPassword(password);
  console.log(hashedPassword);
})();
