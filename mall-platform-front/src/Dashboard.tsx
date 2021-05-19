import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Title} from 'react-admin';
import Typography from '@material-ui/core/Typography';

export const Dashboard = () => {
  return (
    <Card>
      <Title title="概览"/>
      <CardContent>
        <Typography variant="h6" color={'textPrimary'}>企云客</Typography>
      </CardContent>
    </Card>
  );
};
export default Dashboard;
