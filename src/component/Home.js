
const Home = () => {

    return ( 
        <div className="homedive">

          <div>
                    <h1 className="title">
                    Un monde  d’espoir <br /> sans exclusion sociale.
                    </h1>
                    <p className="paragraphe"> Réseau d’Action pour le Développement et Progrès Intégrés <br />
                        RADPI en sigle  est une organisation Nationale non gouvernementale
                       de droit congolais,<br/>
                       créée le 10 Mai 2009 sous  l’initiative  des acteurs dynamiques 
                      interdisciplinaires.<br />
                       LA MISSION DE RADPI  est de renforcer la capacité de résilience <br />
                       communautaire tout en soutenant les actions d’urgence vers le développement <br /> 
                      en collaboration avec d’autres intervenants humanitaires. 
                   </p>       
          </div>
                <div className="main">
                
                    <div className="sec1">
                    <p className="paraprase1">La vision de radpi </p>
                    <p className="paraprase">Un monde d’espoir sans exclusion sociale <br />
                    où les droits des personnes 
                    sont respectés <br /> par la communauté.
                    </p>
                    </div> 
                    <div className="sec2">
                    <p className="paraprase2">Domaines d’intervention</p>
                    <p className="paraprase">Education & Protection,<br />
                    Suivi Mouvement des Populations,<br />
                    Santé & Wash
                    La TC ( Transformation de conflit)
                    </p>
                    </div>
                    <div className="sec3">
                    <p className="paraprase3">Cibles </p>
                    <p className="paraprase">Enfants,Femmes,PDIs
                              Et autres catégories <br /> des vulnérables.
                   </p>
                    </div>
                    <a href="/"><input type="button" value="Savoir plus sur Radpi " /></a>
                </div>



        </div>
    );
}
 
export default Home;