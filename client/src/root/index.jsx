import React, { useState, useEffect } from 'react';
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Loader from '../components/Loader';
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import PositionItems from '../components/PositionItems'
import Work from '../components/Work'
import WorkTwo from '../components/WorkTwo'
import './root.scss'
import axios from 'axios'

const Root = () => {

  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [aboutData, setAboutData] = useState([]);

  const fetchPortfolio = async () => {
    await axios.get('http://localhost:5000/api/portfolio/')
      .then(res => {
        let id = 0;
        res.data.data.forEach((value) => {
          id++;
          value = Object.assign(value, { id })
        })
        setData(res.data.data)
        setSpinner(false);
      })
      .catch(err => console.log(err, 'err'))
  }

  const fetchCompany = async () => {
    await axios.get('http://localhost:5000/api/company/')
      .then(res => {
        let id = 0;
        res.data.data.forEach((value) => {
          id++;
          value = Object.assign(value, { id })
        })
        setCompanyData(res.data.data)
        setSpinner(false);
      })
      .catch(err => console.log(err, 'err'))
  }

  const fetchAboutMe = async () => {
    await axios.get('http://localhost:5000/api/aboutMe/')
      .then(res => {
        setAboutData(res.data.data)
        setSpinner(false);
      })
      .catch(err => console.log(err, 'err'))
  }

  const fetchAbout = async () => {
    await axios.get('http://localhost:5000/api/aboutMe/')
      .then(res => {
        console.log(res, 'about');
        setAboutData(res.data.data)
        setSpinner(false);
      })
      .catch(err => console.log(err, 'err'))
  }

  
  useEffect(() => {
    fetchPortfolio();
    fetchAboutMe();
    fetchCompany();
    fetchAbout()
  }, [])

  return (
    spinner ? <Loader /> :
      <div className="root">
        <PositionItems />
        <Navbar aboutData={aboutData} />
        <Main />
        <About aboutData={aboutData}/>
        <Experience companyData={companyData} />
        <Work data={data} />
        <WorkTwo data={data} />
        <Portfolio data={data} />
        <Contact />
      </div>
  )
}

export default Root
