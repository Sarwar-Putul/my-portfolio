import React from 'react';
import './Blog.css';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import react from '../../image/React.png'



const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
      margin: 'auto',
      borderRadius: spacing(2), // 16px
      transition: '0.3s',
      boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
      position: 'relative',
      maxWidth: 500,
      marginLeft: 'auto',
      overflow: 'initial',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: spacing(2),
      [breakpoints.up('md')]: {
        flexDirection: 'row',
        paddingTop: spacing(2),
      },
    },
    media: {
      width: '88%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: spacing(-3),
      height: 0,
      paddingBottom: '48%',
      borderRadius: spacing(2),
      backgroundColor: '#fff',
      position: 'relative',
      [breakpoints.up('md')]: {
        width: '100%',
        marginLeft: spacing(-3),
        marginTop: 0,
        transform: 'translateX(-8px)',
      },
      '&:after': {
        content: '" "',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
        borderRadius: spacing(2), // 16
        opacity: 0.5,
      },
    },
    content: {
      padding: 24,
    },
    cta: {
      marginTop: 24,
      textTransform: 'initial',
    },
  }));


function Blog()  {
    const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

    return (
        <section id="blog">
        <div className='blog-title ml-5 pl-5'>
            <h3>BLOG</h3>
        </div>
            <div className="row mt-5 pt-5 pb-5">
                <div className="col-md-6 pb-5 pl-5 pr-5">
                    <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardMedia
                            className={styles.media}
                            image={react}
                        />
                        <CardContent>
                            <TextInfoContent
                            classes={contentStyles}
                            overline={'03 MAY 2021'}
                            heading={'What is React JS??'}
                            body={
                                'React JS is a JavaScript library used in web development to build interactive elements...'
                            }
                            />
                            <a href="https://sarwarputul.medium.com/what-is-react-js-7c2149ffd135"><Button className={buttonStyles}>Read more</Button></a>
                            
                        </CardContent>
                    </Card>
                </div>
                <div className="col-md-6 pb-5 pl-5 pr-5">
                    <Card className={cx(styles.root, shadowStyles.root)}>
                            <CardMedia
                                className={styles.media}
                                image={react}
                            />
                            <CardContent>
                                <TextInfoContent
                                classes={contentStyles}
                                overline={'03 MAY 2021'}
                                heading={'What is React JS??'}
                                body={
                                    'React JS is a JavaScript library used in web development to build interactive elements...'
                                }
                                />
                                <a href="https://sarwarputul.medium.com/what-is-react-js-7c2149ffd135"><Button className={buttonStyles}>Read more</Button></a>
                                
                            </CardContent>
                        </Card>
                </div>
            </div>
        </section>
    );
};

export default Blog;