import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
import { BlogPostCard } from '../../sections/@dashboard/blog';
import { TopPage } from './styles';
import shoesAsset from './assets/product_6.jpg'
import POSTS from '../../_mock/blog';
import { AppWidgetSummary } from '../../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  const handleProduct = () =>{
window.location.href ='/dashboard/products'
  }

  return (
      <Container maxWidth="xl">
       <TopPage>
        <img src={shoesAsset} alt='shoesAsset'/>
        <div>SEU <h2>ECOMMERCE</h2> DE <h1>CALÇADOS</h1> PERSONALIZADO</div>
       </TopPage>
       <Grid 
       onClick={handleProduct}
       item xs={12} sm={6} md={3} marginBottom='10vh'>
            <AppWidgetSummary title="Confira nossos produtos"  color="warning" icon={'ant-design:shop-filled'} />
          </Grid>
       <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
  );
}
