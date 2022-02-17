import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
  app: {
    fontFamily: 'Mulish,Helvetica,Arial,sans-serif'
  },
  darkBack: {
    background: '#1c0d04'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '50px 20px'
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '90%'
  },
  logo: {
    height: '76px',
    marginTop: '19px',
    maxWidth: '100%'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  heading: {
    color: '#fff',
    fontWeight: 'bolder',
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '4px !important'
  },
  links: {
    margin: 0,
    width: '100%'
  },
  link: {
    color: '#fff',
    display: 'inline-block',
    cursor: 'pointer',
    marginBottom: '10px',
    textDecoration: 'none',
    '&:hover:after': {
      width: '100%'
    },
    '&:hover': {
      color: '#ff783c',
      borderBottom: 'solid 2px #ff783c',
      transition: 'width .3s'
    },
  },
  heading2: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '18px',
  },
  socialLinks: {
    display: 'flex',
  },
  img: {
    marginRight: '6px',
    cursor: 'pointer',
    width: '42px'
  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  contact: {
    height: 18,
    width: 18,
    marginRight: '17px'
  },
  contactText: {
    color: '#eee',
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '200%',
    '&:hover': {
      color: '#ff783c',
      borderBottom: 'solid 2px #ff783c',
    }
  }
  
}))

export default function footer() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <div className={clsx(classes.container, classes.darkBack)}>
        <div className={classes.footerContainer}>

          <Grid container>
            <Grid item xs={12} lg={3}>
              <img lazyload="https://files.codingninjas.in/cn-logo-dark-9824.svg" offset="0" alt="Coding Ninjas Logo" src="https://files.codingninjas.in/cn-logo-dark-9824.svg" className={classes.logo} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <div className={classes.innerContainer}>
                    <p className={classes.heading}>CODING NINJAS</p>
                    <div className={classes.links}>
                      <p><a className={classes.link}>About Us</a></p>
                      <p><a className={classes.link}>Privacy Policy</a></p>
                      <p><a className={classes.link}>Terms & Condition</a></p>
                      <p><a className={classes.link}>Privacy & Refund Policy</a></p>
                      <p><a className={classes.link}>Bug Bounty</a></p>
                      <p><a className={classes.link}>Customers</a></p>
                      <p><a className={classes.link}>Press Release</a></p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className={classes.innerContainer}>
                    <p className={classes.heading}>PRODUCTS</p>
                    <div className={classes.links}>
                      <p><a className={classes.link}>Courses</a></p>
                      <p><a className={classes.link}>Try courses for Free</a></p>
                      <p><a className={classes.link}>Career Camp</a></p>
                      <p><a className={classes.link}>Hire Talent</a></p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className={classes.innerContainer}>
                    <p className={classes.heading}>COMMUNITY</p>
                    <div className={classes.links}>
                      <p><a className={classes.link}>Code Studio</a></p>
                      <p><a className={classes.link}>Blog</a></p>
                      <p><a className={classes.link}>Events</a></p>
                      <p><a className={classes.link}>Campus Ninja</a></p>
                      <p><a className={classes.link}>Affiliate</a></p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
              <div className={classes.innerContainer}>
                <div className={classes.socialContainer}>
                  <p className={classes.heading2}>FOLLOW US ON</p>
                  <div className={classes.socialLinks}>
                    <a><img className={classes.img} alt="Coding Ninjas Facebook Page" src="https://files.codingninjas.in/0000000000003240.png" /></a>
                    <a><img className={classes.img} alt="Coding Ninjas Instagram Page" src="https://files.codingninjas.in/0000000000003241.png" /></a>
                    <a><img className={classes.img} alt="Coding Ninjas Youtube Page" src="https://files.codingninjas.in/0000000000003245.png" /></a>
                    <a><img className={classes.img} alt="Coding Ninjas Twitter Page" src="https://files.codingninjas.in/0000000000003247.png" /></a>
                    <a><img className={classes.img} alt="Coding Ninjas Linkedin Page" src="https://files.codingninjas.in/0000000000003242.png" /></a>
                    <a><img className={classes.img} alt="Coding Ninjas Telegram Channel" src="https://files.codingninjas.in/telegram-8247.svg" /></a>
                  </div>
                </div>
                <p className={classes.heading2}>CONTACT US</p>
                <div className={classes.links}>
                  <p className={classes.row}><img className={classes.contact} src="https://files.codingninjas.in/0000000000003251.png" alt="Coding Ninjas Toll Free Number"/><a className={classes.contactText}>1800-123-3598</a></p>
                  <p className={classes.row}><img className={classes.contact} src="https://files.codingninjas.in/0000000000003250.png" alt="Coding Ninjas Contact Email"/><a className={classes.contactText} target="_top">contact@codingninjas.com</a></p>
                </div>
              </div>
            </Grid>
          </Grid>

        </div>
      </div>
                {/* </div></shared-ui-footer-middle-info><shared-ui-footer-middle-products _ngcontent-serverapp-c105="" _nghost-serverapp-c103=""><div _ngcontent-serverapp-c103="" class="container"><p _ngcontent-serverapp-c103="" class="my-16">PRODUCTS</p><div _ngcontent-serverapp-c103="" class="links"><p _ngcontent-serverapp-c103=""><a _ngcontent-serverapp-c103="" href="https://www.codingninjas.com/courses">Courses</a></p><p _ngcontent-serverapp-c103=""><a _ngcontent-serverapp-c103="" href="https://www.codingninjas.com/start-learning">Try courses for Free</a></p><p _ngcontent-serverapp-c103=""><a _ngcontent-serverapp-c103="" href="https://careercamp.codingninjas.com">Career Camp</a><!----></p><p _ngcontent-serverapp-c103=""><a _ngcontent-serverapp-c103="" href="https://www.codingninjas.com/hire-from-us">Hire Talent</a></p></div></div></shared-ui-footer-middle-products><shared-ui-footer-middle-community _ngcontent-serverapp-c105="" _nghost-serverapp-c104=""><div _ngcontent-serverapp-c104="" class="container"><p _ngcontent-serverapp-c104="" class="my-16">COMMUNITY</p><div _ngcontent-serverapp-c104="" class="links"><p _ngcontent-serverapp-c104=""><a _ngcontent-serverapp-c104="" href="https://www.codingninjas.com/codestudio">CodeStudio</a></p><p _ngcontent-serverapp-c104=""><a _ngcontent-serverapp-c104="" href="https://www.codingninjas.com/blog">Blog</a></p><p _ngcontent-serverapp-c104=""><a _ngcontent-serverapp-c104="" href="https://www.codingninjas.com/events">Events</a></p><p _ngcontent-serverapp-c104=""><a _ngcontent-serverapp-c104="" href="https://campus.codingninjas.com">Campus Ninja</a></p><!----><p _ngcontent-serverapp-c104=""><a _ngcontent-serverapp-c104="" href="https://www.codingninjas.com/affiliate">Affiliate</a></p></div></div></shared-ui-footer-middle-community></div></shared-ui-footer-middle><shared-ui-footer-right _ngcontent-serverapp-c110="" _nghost-serverapp-c107=""><div _ngcontent-serverapp-c107="" class="container"><div _ngcontent-serverapp-c107="" class="social-container"><p _ngcontent-serverapp-c107="" class="my-16">FOLLOW US ON</p><div _ngcontent-serverapp-c107="" class="social-links"><a _ngcontent-serverapp-c107="" href="https://www.facebook.com/codingninjas"><img _ngcontent-serverapp-c107="" lazyload="https://files.codingninjas.in/0000000000003240.png" offset="0" alt="Coding Ninjas Facebook Page" src="https://files.codingninjas.in/0000000000003240.png" class="  ng-lazyloaded"></a><a _ngcontent-serverapp-c107="" href="https://www.instagram.com/coding.ninjas/"><img _ngcontent-serverapp-c107="" lazyload="https://files.codingninjas.in/0000000000003241.png" offset="0" alt="Coding Ninjas Instagram Page" src="https://files.codingninjas.in/0000000000003241.png" class="  ng-lazyloaded"></a><a _ngcontent-serverapp-c107="" href="https://www.youtube.com/c/CodingNinjasIndia"><img _ngcontent-serverapp-c107="" lazyload="https://files.codingninjas.in/0000000000003245.png" offset="0" alt="Coding Ninjas Youtube Page" src="https://files.codingninjas.in/0000000000003245.png" class="  ng-lazyloaded"></a><a _ngcontent-serverapp-c107="" href="https://twitter.com/CodingNinjasOff"><img _ngcontent-serverapp-c107="" lazyload="https://files.codingninjas.in/0000000000003247.png" offset="0" alt="Coding Ninjas Twitter Page" src="https://files.codingninjas.in/0000000000003247.png" class="  ng-lazyloaded"></a><a _ngcontent-serverapp-c107="" href="https://www.linkedin.com/company/coding-ninjas-india/"><img _ngcontent-serverapp-c107="" lazyload="https://files.codingninjas.in/0000000000003242.png" offset="0" alt="Coding Ninjas Linkedin Page" src="https://files.codingninjas.in/0000000000003242.png" class="  ng-lazyloaded"></a><a _ngcontent-serverapp-c107="" href="https://t.me/codingninjas_official"><img _ngcontent-serverapp-c107="" lazyload="https://files.codingninjas.in/telegram-8247.svg" offset="0" alt="Coding Ninjas Telegram Channel" src="https://files.codingninjas.in/telegram-8247.svg" class="  ng-lazyloaded"></a></div></div><shared-ui-footer-middle-contacts _ngcontent-serverapp-c107="" _nghost-serverapp-c106=""><div _ngcontent-serverapp-c106="" class="container"><p _ngcontent-serverapp-c106="" class="my-16">CONTACT US</p><div _ngcontent-serverapp-c106="" class="links"><p _ngcontent-serverapp-c106="" class="row"><img _ngcontent-serverapp-c106="" src="https://files.codingninjas.in/0000000000003251.png" alt="Coding Ninjas Toll Free Number"><a _ngcontent-serverapp-c106="" href="tel:1800-123-3598">1800-123-3598</a></p><!----><p _ngcontent-serverapp-c106="" class="row"><img _ngcontent-serverapp-c106="" src="https://files.codingninjas.in/0000000000003250.png" alt="Coding Ninjas Contact Email"><a _ngcontent-serverapp-c106="" target="_top" href="mailto:contact@codingninjas.com?Subject=Enquiry">contact@codingninjas.com</a></p></div></div></shared-ui-footer-middle-contacts></div></shared-ui-footer-right></div></div> */}
    </div>
  )
}
