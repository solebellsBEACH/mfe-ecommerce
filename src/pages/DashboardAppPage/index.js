import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import { TopPage } from './styles';
import shoesAsset from './assets/product_6.jpg'
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
      <Container maxWidth="xl">
       <TopPage>
        <img src={shoesAsset} alt='shoesAsset'/>
        <div>SEU <h2>ECOMMERCE</h2> DE <h1>CALÇADOS</h1> PERSONALIZADO</div>
       </TopPage>
      </Container>
  );
}
