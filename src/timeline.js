import React from 'react';
import HorizontalTimeline from "react-horizontal-timeline";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const { news_article1, news_article2, news_article3, news_article4 } = require('./database.js')

export default class Timeline extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        curIdx: 0,      
      };
    }
  
    //state = { value: 0, previous: 0 };
  
    render() {    
      const {curIdx} = this.state;
      const article = eval('news_article' + this.props.articleIdx);
      const data = article.timeline;
      const daily_content = data[curIdx].content;
      const date = data[curIdx].date;
      const { classes } = this.props;
      moment.locale('en');
      moment().format("MMM Do YY");
      return (
        <div>
          {/* Bounding box for the Timeline */}
          <div style={{ display:'flex', justifyContent:'center', marginTop:50}}>
          <Card style={{width: '35rem', backgroundColor:'#1E1E1E'}}>
          <CardContent>
            <Typography style={{color: '#F5F5F5', fontWeight: 'normal'}}>
              {daily_content.split('\n').map(str => <p>{str}</p>)}
            </Typography>
          </CardContent>
          </Card>
            </div>
          <div
            style={{
              width: "60%",
              height: "100px",
              margin: "0 auto",
              marginTop: "20px",
              fontSize: "15px"
            }}
          >
            <HorizontalTimeline
              styles={{
                background: "#f8f8f8",
                foreground: "#1E1E1E",
                outline: "#dfdfdf"
              }}
              index={this.state.curIdx}
              indexClick={index => {
                const curIdx = this.state.curIdx;
                this.setState({ curIdx: index, prevIdx: curIdx });
              }}            
              values={data.map(x => moment(x.date))}
            />
          </div>
          
          </div>
      );
    }
  }


  
