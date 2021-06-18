import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import './Skill.css'


const useStyles = makeStyles({
    root: {
      width: '80%',
      
    },
  });

const Skill = () => {
    const classes = useStyles();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress === 100) {
            return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
        });
        }, 500);

        return () => {
        clearInterval(timer);
        };
    }, []);


    return (
        <section id="skill">
            <div className="row justify-content-center pb-5">
                <div className="my-skill col-md-5 mt-5 ml-5">
                   <div  className=" mb-5">
                       <h3>SKILLS</h3>
                   </div>
                   <div>
                        <div className={classes.root}>
                            <h4>HTML</h4>
                            <LinearProgress color="secondary" style={{width: "100%"}} variant="determinate" value={progress} />
                        </div>
                        <div className={classes.root}>
                            <h4>CSS</h4>
                            <LinearProgress  style={{width: "90%"}} variant="determinate" value={progress} />
                        </div>
                        <div className={classes.root}>
                            <h4>JavaScript</h4>
                            <LinearProgress color="secondary" style={{width: "70%"}} variant="determinate" value={progress} />
                        </div>
                        <div className={classes.root}>
                            <h4>React JS</h4>
                            <LinearProgress style={{width: "90%"}} variant="determinate" value={progress} />
                        </div>
                        <div className={classes.root}>
                            <h4>React Native</h4>
                            <LinearProgress color="secondary" style={{width: "40%"}} variant="determinate" value={progress} />
                        </div>
                   </div>

                </div>
                <div className="my-skill col-md-5 mt-5 ml-5">
                    <div className="line text-black mb-5">
                        
                   </div>
                   <div>
                        <div className={classes.root}>
                            <h4>Bootstrap</h4>
                            <LinearProgress style={{width: "80%"}} variant="determinate" value={progress} />
                        </div>
                        <div className={classes.root}>
                            <h4>Material ui</h4>
                            <LinearProgress color="secondary" style={{width: "50%"}} variant="determinate" value={progress} />
                        </div>
                        <div className={classes.root}>
                            <h4>Node js</h4>
                            <LinearProgress style={{width: "66%"}} variant="determinate" value={progress} />
                        </div>
                        <div className={classes.root}>
                            <h4>Mongodb</h4>
                            <LinearProgress color="secondary" style={{width: "90%"}} variant="determinate" value={progress} />
                        </div>
                        <div className={classes.root}>
                            <h4>Tailwind CSS</h4>
                            <LinearProgress style={{width: "60%"}} variant="determinate" value={progress} />
                        </div>
                   </div>

                </div>

            </div>

        </section>
    );
};

export default Skill;