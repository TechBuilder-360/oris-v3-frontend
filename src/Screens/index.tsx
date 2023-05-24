import React, { Component } from 'react';
import styles from './index.module.css';
import { Button, Grid } from '@mui/material';
import Preauth from '../components/navigation/preauth';

class Home extends Component {
  render() {
    return (
      <div>
        <Preauth />
        <div className={styles.dashboard}>
          {/* Links to Sign up page*/}
          <Button variant="contained" id={styles.get_started_btn} href={'register'}>
            Get Started
          </Button>
        </div>
        <main>
          <Grid container style={{ padding: '2%' }} spacing={2}>
            <Grid item xs={6}>
              Tacimates pertinacia pretium cetero eloquentiam epicuri fabulas elit. Fames sem ut
              quaeque legere aenean inani decore bibendum brute. Possim dolor dui metus oporteat
              adversarium sodales. Porta no fusce neglegentur moderatius semper tristique. Mel orci
              aliquam faucibus ullamcorper. Invidunt nibh reformidans tortor taciti. Disputationi
              orci sea vidisse definitionem morbi tristique quisque affert. Electram elit
              efficiantur partiendo possit elaboraret delenit quisque indoctum. Liber ultricies quot
              inimicus tempus mucius feugait. Viderer congue semper moderatius quo veniam fames.
              Reque possim ubique nobis principes enim causae perpetua. Elit liber nibh ius quis
              ante sumo tota nonumes. Duo potenti iuvaret suscipit possim evertitur invenire
              inceptos. Metus eloquentiam dictum quisque cubilia adhuc. Duo vim posidonium
              consectetur eleifend eros. Nullam alienum nascetur omnesque quas. Cetero scelerisque
              tempor quisque affert sociosqu urna. Deserunt graeci in iriure mea consectetur
              recteque constituam. Mucius aliquid posuere ultricies egestas placerat quisque. Ipsum
              fabulas mediocritatem commune quot graecis phasellus proin accusata volutpat. Eu mazim
              fames sem dictumst dicta arcu idque vidisse. Feugiat altera corrumpit posidonium
              nostra fabellas deterruisset aeque dolorem eros. Esse verterem maximus nulla
              voluptaria dapibus. Expetenda dictum brute mollis aenean persequeris ne sagittis usu.
              Vidisse integer atqui mattis voluptatum eruditi consectetur explicari litora. Dico
              mutat primis appetere nulla habitant dicat class fabulas sociis. Orci veri cubilia
              percipit dictumst appetere diam pri posse. Egestas sumo splendide quot reprehendunt
              semper. Mei constituto montes voluptaria electram ex. Dicta qualisque prompta
              parturient at dictas iriure. Eget salutatus mei imperdiet usu constituam dolore.
              Melius elaboraret duo habemus malesuada ornare tation proin has fabulas. Cras alia
              elitr in voluptaria. Singulis salutatus facilisi reprimique urbanitas commodo
              comprehensam graeci graece duo. Singulis suscipiantur tale singulis pharetra equidem
              detracto imperdiet. Viverra facilisis convenire discere maecenas libero ultrices
              feugiat. Detraxit in noluisse magnis iaculis. Ubique alienum proin eruditi donec
              neglegentur ultricies quidam. Sale placerat autem non reprimique augue autem noster
              etiam. Rutrum possim accumsan nostra persequeris magna.
            </Grid>
            <Grid item xs={6}>
              Tacimates pertinacia pretium cetero eloquentiam epicuri fabulas elit. Fames sem ut
              quaeque legere aenean inani decore bibendum brute. Possim dolor dui metus oporteat
              adversarium sodales. Porta no fusce neglegentur moderatius semper tristique. Mel orci
              aliquam faucibus ullamcorper. Invidunt nibh reformidans tortor taciti. Disputationi
              orci sea vidisse definitionem morbi tristique quisque affert. Electram elit
              efficiantur partiendo possit elaboraret delenit quisque indoctum. Liber ultricies quot
              inimicus tempus mucius feugait. Viderer congue semper moderatius quo veniam fames.
              Reque possim ubique nobis principes enim causae perpetua. Elit liber nibh ius quis
              ante sumo tota nonumes. Duo potenti iuvaret suscipit possim evertitur invenire
              inceptos. Metus eloquentiam dictum quisque cubilia adhuc. Duo vim posidonium
              consectetur eleifend eros. Nullam alienum nascetur omnesque quas. Cetero scelerisque
              tempor quisque affert sociosqu urna. Deserunt graeci in iriure mea consectetur
              recteque constituam. Mucius aliquid posuere ultricies egestas placerat quisque. Ipsum
              fabulas mediocritatem commune quot graecis phasellus proin accusata volutpat. Eu mazim
              fames sem dictumst dicta arcu idque vidisse. Feugiat altera corrumpit posidonium
              nostra fabellas deterruisset aeque dolorem eros. Esse verterem maximus nulla
              voluptaria dapibus. Expetenda dictum brute mollis aenean persequeris ne sagittis usu.
              Vidisse integer atqui mattis voluptatum eruditi consectetur explicari litora. Dico
              mutat primis appetere nulla habitant dicat class fabulas sociis. Orci veri cubilia
              percipit dictumst appetere diam pri posse. Egestas sumo splendide quot reprehendunt
              semper. Mei constituto montes voluptaria electram ex. Dicta qualisque prompta
              parturient at dictas iriure. Eget salutatus mei imperdiet usu constituam dolore.
              Melius elaboraret duo habemus malesuada ornare tation proin has fabulas. Cras alia
              elitr in voluptaria. Singulis salutatus facilisi reprimique urbanitas commodo
              comprehensam graeci graece duo. Singulis suscipiantur tale singulis pharetra equidem
              detracto imperdiet. Viverra facilisis convenire discere maecenas libero ultrices
              feugiat. Detraxit in noluisse magnis iaculis. Ubique alienum proin eruditi donec
              neglegentur ultricies quidam. Sale placerat autem non reprimique augue autem noster
              etiam. Rutrum possim accumsan nostra persequeris magna.
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default Home;
