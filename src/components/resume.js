import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{ height: '200px' }}
              />
            </div>

            <h2 style={{ paddingTop: '1em' }}>Mohamed Ali Boudich</h2>
            <h4 style={{ color: 'grey' }}>Développeur Full Stack</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>18 Rue des bas rogers Puteaux , 92800</p>
            <h5>Phone</h5>
            <p>(+33) 456-7890</p>
            <h5>Email</h5>
            <p>allalaspace@gmail.com</p>
            <h5>Web</h5>
            <p>mohamedaliboudich.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2010}
              endYear={2013}
              schoolName="Diplôme National d’Ingénieur en informatique"
              schoolDescription="Ecole Supérieure Privée d’Ingénierie et de Technologies, Tunisie"
            />

            <Education
              startYear={2007}
              endYear={2010}
              schoolName="Diplôme des Études Technologiques Supérieurs de l’ISET Nabeul"
              schoolDescription="Institut Supérieur des Etudes Technologiques, Nabeul"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2016}
              //endYear={2012}
              jobName="Veolia, Consultant développeur .Net (Poste Actuel)"
              jobDescription="Jason ERP Local (une équipe de 16 personnes) 
              •	Développement de web service pour interagir Jason avec une application indistruel en utilisant Web API.
              •	Automatisation de processus de build pour la compilation et build avec GIT et jenkins.
              •	Mise en place d’une solution Pour l’automatisation des Tests, utilisation de selenium, nunit-Gui.
              •	Mise en place des services de Pesage des camions.
              •	Extraction des Grids sous excel.
              •	Développement des éxigences métier et correction des Bugs.
              •	Intervention sur site client si nécessaire.
              "
            />

            <Experience
              startYear={2014}
              endYear={2016}
              jobName="Allisone BPO, Consultant développeur .Net"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2014}
              endYear={2016}
              jobName="Allisone BPO, Consultant développeur .Net"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2014}
              endYear={2016}
              jobName="Allisone BPO, Consultant développeur .Net"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={50}
            />
            <Skills
              skill="React"
              progress={25}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
