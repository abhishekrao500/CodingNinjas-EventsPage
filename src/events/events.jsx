import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
// import TextField from '@material-ui/core/TextField';

import Upcoming from './components/upcoming'
import EmptyScreen from './components/EmptyScreen'

const SHOW_BY_DEFAULT = 12; 

const useStyles = makeStyles(() => ({
  app: {
    fontFamily: 'Mulish,Helvetica,Arial,sans-serif'
  },
  eventBody: {
    display: 'flex',
    margin: '24px'
  },
  eventCardsContainer: {
    width: '100%'
  },
  tagsContainer: {
    height: 'auto',
  },
  tagsHeading: {
    fontWeight: 700,
    fontSize: '16px',
    textTransform: 'uppercase',
    color: '#616161',
    marginBottom: '14px'
  },
  tagsWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  tag: {
    color: '#424242',
    fontSize: '14px',
    padding: '6px 12px',
    fontWeight: 400,
    borderRadius: '2px',
    marginRight: '5px',
    marginBottom: '10px',
    background: '#eee',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  tagSelected: {
    color: '#fff',
    fontSize: '14px',
    padding: '6px 12px',
    fontWeight: 400,
    borderRadius: '2px',
    marginRight: '5px',
    marginBottom: '10px',
    background: '#fa7328',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  tagMob: {
    color: '#424242',
    fontSize: '14px',
    padding: '6px 12px',
    fontWeight: 400,
    borderRadius: '20px',
    marginRight: '5px',
    marginBottom: '10px',
    background: '#eee',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  tagMobSelected: {
    color: '#fff',
    fontSize: '14px',
    padding: '6px 12px',
    fontWeight: 400,
    borderRadius: '20px',
    marginRight: '5px',
    marginBottom: '10px',
    background: '#fa7328',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  tagText: {
    margin: '0 !important'
  },
  viewMore: {
    color: '#fa7328',
    fontWeight: 550,
    fontSize: '14px',
    cursor: 'pointer',
    display: 'block',
    padding: '6px 12px',
    borderRadius: '20px',
    marginRight: '5px',
    marginBottom: '10px',
    background: '#fff',
    textDecoration: 'none'
  },
  eventPagination: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
    alignItems: 'center'
  },
  landingPageArrow: {
    background: "#fc9d69", 
    boxShadow: "0 2px 4px rgb(24 4 50 / 24%)", 
    borderRadius: "4px", 
    padding: "12px 18px", 
    cursor: "pointer", 
    MsUserSelect: "none", 
    userSelect: "none", 
    WebkitUserSelect: "none", 
    MozUserSelect: "none", 
    WebkitTapHighlightColor: "transparent", 
    WebkitUserDrag: "none"
  },
  landingPageInput: {
    margin: "0 14px", 
    color: "#616161", 
    fontSize: "16px", 
    fontWeight: 600
  },
  pageInput: {
    border: "1px solid #d0d0d0", 
    color: "#616161", 
    fontSize: "16px", 
    boxSizing: "border-box", 
    borderRadius: "4px", 
    padding: "8px", 
    textAlign: "center", 
    width: "50px", 
    background: "#fff", 
    margin: "0 6px"
  },
  pageDis: {
    cursor: 'not-allowed',
    pointerEvents: 'none',
    boxSizing: 'border-box',
    opacity: .5
  }
}))
export default function Events (props) {
  const classes = useStyles()
  const {events, tags} = props
  const {tagsSelected, setTagsSelected} = props

  const [showAll, setShowAll] = React.useState(false);
  const {page, setPage} = props
  const visibleOptions = showAll ? tags.length : SHOW_BY_DEFAULT; 

  const toggleShowAll = () => { 
    setShowAll(!showAll)
  }
  
  const handleClick = (tag) => {
    let a = tagsSelected
    const index = a.indexOf(tag)
    if(index > -1){
      a.splice(index, 1)
    }else a.push(tag)
    setTagsSelected(a)
    setPage(1)
    props.fetchEvents()
  }

  const handlePageRightChange = () => {
    let a = page + 1
    setPage(a)
  }
  const handlePageLeftChange = () => {
    let a = page - 1
    setPage(a)
  }

  return (
    <div className={classes.app}>
      <div className={classes.eventBody}>
        <div className={classes.eventCardsContainer}>
          <Grid container className={classes.eventsContainer}>
            <Hidden only={['md', 'lg', 'xl']}>
              <Grid item sm={12}>
                <div className={classes.tagsContainer}>
                  <div className={classes.tagsHeading}>Tags</div>
                  <div className={classes.tagsWrapper}>
                    {tags.slice(0, visibleOptions).map(tag => {
                        let a = tagsSelected
                        const index = a.indexOf(tag)
                        if(index > -1){
                          return(
                            <div onClick={() => handleClick(tag)} key={tag} className={classes.tagMobSelected}>
                              <p className={classes.tagText}> {tag} </p>
                            </div>
                          )
                        }
                        else{
                          return(
                            <div onClick={() => handleClick(tag)} key={tag} className={classes.tagMob}>
                              <p className={classes.tagText}> {tag} </p>
                            </div>
                          )
                        }
                    })}
                    { tags.length > SHOW_BY_DEFAULT && (
                      <div className={classes.viewMore} onClick={toggleShowAll}>
                        {!showAll ? `See ${tags.length - SHOW_BY_DEFAULT} more tags` : ''}
                      </div>
                    )}
                  </div>
                </div>
              </Grid>
            </Hidden>
            <Grid item md={10}>
              <Grid container>
                {events.length == 0 ? <EmptyScreen /> : events.map(e => {
                  return(
                    <Grid key={e.id} item xs={12} md={6}>
                      <Upcoming key={e.id} event={e} />
                    </Grid>
                  )
                })}
              </Grid>
              {events.length > 0 && <div className={classes.eventPagination}>
                {page > 1 && page <= props.pageCount ? <>
                  <div onClick={handlePageLeftChange} className={classes.landingPageArrow}><img className={classes.pageArrowImg} src="https://files.codingninjas.in/left-arrow-5581.svg" alt="Prev" /></div>
                </> : <>
                  <div className={clsx(classes.landingPageArrow, classes.pageDis)}><img className={classes.pageArrowImg} src="https://files.codingninjas.in/left-arrow-5581.svg" alt="Prev" /></div>
                </>}
                <div className={classes.landingPageInput}> Page <input min="1" max={props.pageCount} value={page} className={classes.pageInput} /> of {props.pageCount} </div>
                {page > 0 && page < props.pageCount ? <>
                  <div onClick={handlePageRightChange} className={classes.landingPageArrow}><img className={classes.pageArrowImg} src="https://files.codingninjas.in/right-arrow-5582.svg" alt="Next" /></div>
                </> : <>
                  <div className={clsx(classes.landingPageArrow, classes.pageDis)}><img className={classes.pageArrowImg} src="https://files.codingninjas.in/right-arrow-5582.svg" alt="Next" /></div>
                </>}
              </div>}
            </Grid>
            <Hidden only={['xs', 'sm']}>
            <Grid item xs={2}>
              <div className={classes.tagsContainer}>
                <div className={classes.tagsHeading}>Tags</div>
                <div className={classes.tagsWrapper}>
                  {tags.slice(0, visibleOptions).map(tag => {
                      let a = tagsSelected
                      const index = a.indexOf(tag)
                      if(index > -1){
                        return(
                          <div onClick={() => handleClick(tag)} key={tag} className={classes.tagSelected}>
                            <p className={classes.tagText}> {tag} </p>
                          </div>
                        )
                      }
                      else{
                        return(
                          <div onClick={() => handleClick(tag)} key={tag} className={classes.tag}>
                            <p className={classes.tagText}> {tag} </p>
                          </div>
                        )
                      }
                  })}
                  { tags.length > SHOW_BY_DEFAULT && (
                    <div className={classes.viewMore} onClick={toggleShowAll}>
                      {!showAll ? `See ${tags.length - SHOW_BY_DEFAULT} more tags` : ''}
                    </div>
                  )}
                </div>
              </div>
            </Grid>
            </Hidden>
            
          </Grid>
        </div>
      </div>
    </div>
  )
}
