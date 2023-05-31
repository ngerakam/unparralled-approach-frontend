import NavBar from '../components/NavBar/NavBar';
import ImageHolder from '../components/ImageHolder/Imageholder';
import FeatureArea from '../components/FeatureArea/FeatureArea';
import FeatureDonate from '../components/FeatureArea/FeatureDonate';
import FeatureBlog from '../components/FeatureArea/FeatureBlog';
import FeaturePartner from '../components/FeatureArea/FeaturePartner';
import Vcards from '../components/FeatureArea/Vcards';
import Footer from '../components/Footer/Footer';



function Home() {


    return ( 
        
            <>
            <NavBar />
            <ImageHolder />
            <FeatureArea />
            <FeatureDonate />
            <Vcards />
            
            <FeatureBlog />
            <FeaturePartner />

            {/* footer Area */}
            <Footer />
            </>
    
      
     );
}

export default Home;