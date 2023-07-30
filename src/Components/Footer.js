import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-5' >
        <MDBRow style={{ display: 'flex', justifyContent: 'space-around', lineHeight:"2.2rem" }}>
          <MDBCol lg='3' md='6' className='mb-5 mb-md-0'>
            <h5 className='text-uppercase mb-2 fs-4'>Socials</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='https://www.linkedin.com/in/csit-aitr-b65a8222b/' target="_blank" className='text-dark'>
                  Linkedin
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/csit_aitr/' target="_blank" className='text-dark'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://aitr.ac.in/' target="_blank" className='text-dark'>
                  AITR
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-2 fs-4'>Contacts</h5>

            <ul className='list-unstyled'>
              <li>
              Phone Number : 
                <a href="tel:07314730000" className='text-dark'>
                 0731-4730000   
                </a>
                <a href="tel:0734730001" className='text-dark'>
                 , 0731-4730001
                </a>
              </li>
              <li>
                General Email:
                <a href="mailto:info@acropolis.in" className='text-dark'>
                info@acropolis.in
                </a>
              </li>
              <li>
              Career(HR)Email: 
                <a href="mailto:hr@acropolis.in" className='text-dark'>
                hr@acropolis.in
                </a>
              </li>
              
            </ul>
          </MDBCol>

          {/* <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol> 

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 4
                </a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow> 
      </MDBContainer> 

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        Made By CI-2(2020-2024) <a href='https://www.linkedin.com/in/himanshu-mishra-bb895a20a/' target='_blank'>Himanshu</a>, <a href='https://www.linkedin.com/in/jaydeepsinghchouhan/' target='_blank'>Jaydeep</a> and <a href='https://www.linkedin.com/in/kunal-pratap-singh-pawar/' target='_blank'>Kunal</a> 
      </div>
    </MDBFooter>
  );
}