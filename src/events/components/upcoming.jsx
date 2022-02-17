import React from 'react'
import clsx from 'clsx'
import date from 'date-and-time';

import Hidden from '@material-ui/core/Hidden'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  event: {
    width: '100%'
  },
  card: {
    background: '#fff',
    borderRadius: '5px',
    width: '95%',
    marginRight: '25px',
    marginBottom: '25px',
    boxShadow: '0 1px 19px 0 rgb(0 0 0 / 7%)',
    cursor: 'pointer',
    fontWeight: '400',
    transition: 'all .3s',
    "@media (max-width: 720px)": {
      width: '100%',
      marginBottom: '20px',
      marginRight: 0
    }
  },
  header: {
    height: '159px',
    position: 'relative'
  },
  glass: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  coverImageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  glassMain: {
    backgroundImage: 'linear-gradient(-180deg,rgba(3,3,3,0),#010101)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: '.2'
  },
  headerImg: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  eventStatus: {
    position: "absolute", 
    fontSize: "12px", 
    color: "#121212", 
    background: "#fff", 
    padding: "0 13px",
    borderRadius: "2px", 
    bottom: "7px", 
    right: "7px", 
    boxShadow: "0 1px 11px 0 rgb(0 0 0 / 11%)"
  },
  eventStatusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  circle: {
    borderRadius: "50%", 
    position: "relative", 
    width: "10px", 
    height: "10px", 
    top: "5px", 
    background: "red linear-gradient(#ff73ac,#ff274b)", 
    transition: "height .25s ease,width .25s ease", 
    transform: "translate(-50%,-50%)", 
    marginRight: "2px",
    '&::after': {
      position: 'fixed',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid red',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(1.4)',
      opacity: 0,
    },
  },
  main: {
    padding: '20px 16px'
  },
  eventName: {
    margin: "0 0 9px", 
    fontSize: "18px", 
    letterSpacing: ".2px", 
    fontWeight: "700", 
    minHeight: "50px"
  },
  details: {
    display: "flex", 
    borderBottom: "1px solid #f3f3f3", 
    paddingBottom: "10px"
  },
  eventInfoItem: {
    display: "flex", 
    flexDirection: "column", 
    marginRight: "16px",
    fontWeight: 500
  },
  itemLabel: {
    fontSize: "13px", 
    color: "rgba(28,28,28,.6)", 
    margin: 0,
    marginBottom: -10
  },
  itemValue: {
    fontSize: "14px", 
    color: "#212121", 
    fontWeight: 600
  },
  shortDescription: {
    marginTop: "12px", 
    height: "57px", 
    fontSize: "14px", 
    lineHeight: "19px", 
    color: "#616161", 
    textOverflow: "ellipsis", 
    overflow: "hidden", 
    display: "-webkit-box", 
    WebkitLineClamp: "3", 
    WebkitBoxOrient: "vertical"
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '64px',
    marginTop: '20px'
  },
  tag: {
    height: "fit-content", 
    marginRight: "8px", 
    marginBottom: "8px", 
    color: "#616161", 
    background: "#eee", 
    borderRadius: "3px", 
    padding: "4px 14px", 
    fontSize: "12px"
  },
  footer: {
    padding: "9px 0 9px 19px", 
    display: "flex", 
    justifyContent: "space-between", 
    borderTop: "1px solid hsla(0,0%,59.2%,.1)", 
    minHeight: "30px"
  },
  registeredUsers: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  profileImgContainer: {
    display: "flex",
    marginBottom: "4px"
  },
  matTooltipTrigger: {
    marginLeft: 0
  },
  footerImage: {
    border: "1px solid #fff", 
    width: "22px", 
    height: "22px", 
    borderRadius: "50%"
  },
  count: {
    margin: 0,
    color: '#757575',
    fontSize: '13px'
  },
  status: {
    display: 'flex'
  },
  regButton: {
    display: "flex", 
    backgroundImage: "linear-gradient(#6de7b4,#3bc97d)", 
    fontSize: "12px", 
    color: "#fff", 
    padding: "8px 14px", 
    borderTopLeftRadius: "16px", 
    borderBottomLeftRadius: "16px", 
    height: "fit-content"
  },
  regImage: {
    width: '12px',
    height: '13px',
    marginRight: '8px'
  },
  viewMore: {
    color: '#fa7328',
    fontWeight: 550,
    fontSize: '14px',
    cursor: 'pointer',
    marginBottom: '7px'
  },
  register_now: {
    background: "linear-gradient(90deg,#fa7328,#ee9f15);",
    borderRadius: '3px',
    color: '#ffffff',
    width: '132px',
    height: '32px',
    border: 'none',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    marginRight: '12px',
  }
}))

export default function upcoming(props) {
  const classes = useStyles()
  const event = props.event

  // var endDate = new Date(event.registration_end_time * 1000)
  // date.format(endDate, 'DD MMM, hh:mm A')
  // console.log(date.format(endDate, 'DD MMM, hh:mm A'))

  return (
    <div className={classes.event}>
      <div className={classes.card}>
        <header className={classes.header}>
          <div className={classes.glass}>
            <div className={classes.coverImageContainer}>
              <div className={classes.glassMain}></div>
              <Hidden only={['md', 'lg', 'xl']}>
                <img className={classes.headerImg} src={event.mobile_cover_picture} alt={event.name} />
              </Hidden>
              <Hidden only={['xs', 'sm']}>
                <img className={classes.headerImg} src={event.cover_picture} alt={event.name} />
              </Hidden>
            </div>
          </div>
          {event.registration_status != 'PAST' ? <div className={classes.eventStatus}>
            <div className={classes.eventStatusContainer}>
              {event.registration_status == 'REGISTRATIONS_OPEN' && <div className={classes.circle}></div>}
              {event.registration_status == 'REGISTRATIONS_CLOSED' ? <p>
                Registrations <b>closed</b>
              </p> : <p>
                Registrations <b>open</b> till <b> {date.format(new Date(event.registration_end_time * 1000), 'DD MMM, hh:mm A')} </b>
              </p>}
            </div>
          </div> : <></>}
        </header>
        <main className={classes.main}>
          <p className={classes.eventName}> {event.name} </p>
          <div className={classes.details}>
            <div className={classes.eventInfoItem}>
              <p className={classes.itemLabel}><b>Starts on</b></p>
              <p className={classes.itemValue}> {date.format(new Date(event.event_start_time * 1000), 'hh:mm A, DD MMM YYYY')} </p>
            </div>
            <div className={clsx(classes.eventInfoItem, classes.price)}>
              <p className={classes.itemLabel}><b>Entry Fee</b></p>
              <p className={classes.itemValue}> {event.fees ? `${event.currency} ${event.fees}` : 'Free'} </p>
            </div>
            <div className={classes.eventInfoItem}>
              <p className={classes.itemLabel}><b>Venue</b></p>
              <p className={classes.itemValue}> {event.venue} </p>
            </div>
          </div>
          <div className={classes.shortDescription}> {event.short_desc} </div>
          <div className={classes.tagsContainer}>
            {event.card_tags.slice(0, 3).map(c => (
              <div key={c} className={classes.tag}> {c} </div>
            ))}
            {event.card_tags.length > 3 && (
              <div className={classes.viewMore}>
                {`+${event.card_tags.length - 3} more`}
              </div>
            )}
          </div>
        </main>
        
        <footer className={classes.footer}>
          <div className={classes.registeredUsers}>
            <div className={classes.profileImgContainer}>
              {event.registered_users.top_users.map(t => (
                <div key={t.name} className={clsx(classes.matTooltipTrigger, classes.userImage)}>
                  <img className={classes.footerImage} src={t.image_url ? t.image_url : "https://files.codingninjas.in/0000000000001270.png"} />
                </div>
              ))}
            </div>
            {event.registered_users.show_users_count && <p className={classes.count}> and <b> {event.registered_users.other_users_count} </b> others registered </p>}
          </div>
          {
          event.event_sub_category != 'Archived' && event.registration_status == 'REGISTRATIONS_OPEN' && !event.user_already_registered ?
          <div className={classes.status}>
            <button _ngcontent-serverapp-c173="" className={classes.register_now}> REGISTER NOW </button>
          </div> : <></>
          }
          {event.event_sub_category != 'Archived' && event.user_already_registered ? <div className={classes.status}>
            <div className={classes.regButton}>
              <img className={classes.regImage} src="https://files.codingninjas.in/0000000000001261.png" />
              Registered
            </div>
          </div> : <></>}
        </footer>
      </div>
    </div>
  )
}
