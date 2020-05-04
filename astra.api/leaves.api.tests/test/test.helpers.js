/* eslint-disable quotes */

const cassandra = require('cassandra-driver');
const config = require('../src/config');

const client = new cassandra.Client({
  cloud: { secureConnectBundle: config.ASTRA_BUNDLE },
  credentials: { username: config.ASTRA_USERNAME, password: config.ASTRA_PASSWORD }
});
  
client.connect(function(err, result){
  console.log('astra connected');
});

const testRecord1 = {
  'id': 9495,
  'all': ['1', '0', 'admin', 'rahul.singh@anant.us', '1', 'saas', 'blockchain', 'monitoring', 'saas', 'blockchain', 'monitoring', '0', '9495', 'BCT Token Sale – INSTITUTIONAL GRADE CRYPTO TRADING SOFTWARE', 'https://www.bct.io/', '<h3 class="t-entry-title h6">David Israel</h3><p class="t-entry-meta">CSO</p><p class="t-entry-excerpt">David Israel is a problem solver, leader, and expert in state-of-the-art technology infrastructure for organizations of scale. He has 30+ years of experience engineering and implementing network and security tools to business innovators, and spearheaded help-desk and risk-reduction operations across the globe.</p>', 'David Israel CSO David Israel is a problem solver, leader, and expert in state-of-the-art technology infrastructure for organizations of scale. He has 30+ years of experience engineering and implementing network and security tools to business innovators, and spearheaded help-desk and risk-reduction operations across the globe.', 'Wed Apr 04 12:24:56 UTC 2018', 'Wed Apr 04 12:25:11 UTC 2018', 'text/html', 'en_US', '0', 'www.bct.io', '200', '/api/entries/9495', '1641694520728879104'],
  'content': '<div class="cover"><img class="img-responsive" src="https://www.tutorialspoint.com/chef/images/chef.jpg" alt="Chef Tutorial" /></div><hr /><p><a href="https://www.tutorialspoint.com/index.htm"><i class="icon icon-arrow-circle-o-left big-font"> Previous Page</i></a></p><p><a href="https://www.tutorialspoint.com/chef/chef_overview.htm">Next Page <i class="icon icon-arrow-circle-o-right big-font"> </i></a></p><hr /><p>Chef is a configuration management technology developed by Opscode to manage infrastructure on physical or virtual machines. It is an open source developed using Ruby, which helps in managing complex infrastructure on the fly. This tutorial provides a basic understanding of the infrastructure and fundamental concepts of managing an infrastructure using Chef.</p><p>This tutorial has been prepared for those who want to understand the features and functionality of Chef and how Chef can help in reducing the complexity of managing an infrastructure.</p><p>After completing this tutorial one would have moderate level understanding of Chef and its key building blocks. It will also give a fair idea on how to configure Chef in a preconfigured infrastructure and how to use it.</p><p>We assume anyone who wants to learn Chef should have an understanding of system administration, infrastructure and network protocol communication. To automate the infrastructure provisioning, one should have a command over basic Ruby script writing and the underlying system where one wants to use Chef.</p><hr /><p><a href="https://www.tutorialspoint.com/index.htm"><i class="icon icon-arrow-circle-o-left big-font"> Previous Page</i></a></p><p><a href="https://www.tutorialspoint.com/cgi-bin/printpage.cgi" target="_blank"> Print</a></p><p><a href="https://www.tutorialspoint.com/chef/chef_overview.htm">Next Page <i class="icon icon-arrow-circle-o-right big-font"> </i></a></p><hr />',
  'content_text': 'Previous Page Next Page  Chef is a configuration management technology developed by Opscode to manage infrastructure on physical or virtual machines. It is an open source developed using Ruby, which helps in managing complex infrastructure on the fly. This tutorial provides a basic understanding of the infrastructure and fundamental concepts of managing an infrastructure using Chef. This tutorial has been prepared for those who want to understand the features and functionality of Chef and how Chef can help in reducing the complexity of managing an infrastructure. After completing this tutorial one would have moderate level understanding of Chef and its key building blocks. It will also give a fair idea on how to configure Chef in a preconfigured infrastructure and how to use it. We assume anyone who wants to learn Chef should have an understanding of system administration, infrastructure and network protocol communication. To automate the infrastructure provisioning, one should have a command over basic Ruby script writing and the underlying system where one wants to use Chef. Previous Page Print Next Page ',
  'created_at': '2019-06-19T12:43:13.000Z',
  'domain_name': 'www.tutorialspoint.com',
  'http_status': '200',
  'is_archived': 1,
  'is_public': 'False',
  'is_starred': 0,
  'language': 'en',
  'links': ['/api/entries/9495'],
  'mimetype': 'text/html',
  'preview_picture': 'https://dummyimage.com/170/000/ffffff&text=Chef%20Tutorial',
  'reading_time': 0,
  'slugs': ['saas', 'blockchain', 'monitoring'],
  'tags': ['saas', 'blockchain', 'monitoring'],
  'title': 'Chef Tutorial',
  'updated_at': '2019-06-19T12:43:16.000Z',
  'url': 'https://www.tutorialspoint.com/chef/index.htm',
  'user_email': 'rahul.singh@anant.us',
  'user_id': '1',
  'user_name': 'admin'
};

let testRecord2 = {
  'id': 9521,
  'all': ['1', '0', 'admin', 'rahul.singh@anant.us', '1', 'saas', 'blockchain', 'monitoring', 'saas', 'blockchain', 'monitoring', '0', '9495', 'BCT Token Sale – INSTITUTIONAL GRADE CRYPTO TRADING SOFTWARE', 'https://www.bct.io/', '<h3 class="t-entry-title h6">David Israel</h3><p class="t-entry-meta">CSO</p><p class="t-entry-excerpt">David Israel is a problem solver, leader, and expert in state-of-the-art technology infrastructure for organizations of scale. He has 30+ years of experience engineering and implementing network and security tools to business innovators, and spearheaded help-desk and risk-reduction operations across the globe.</p>', 'David Israel CSO David Israel is a problem solver, leader, and expert in state-of-the-art technology infrastructure for organizations of scale. He has 30+ years of experience engineering and implementing network and security tools to business innovators, and spearheaded help-desk and risk-reduction operations across the globe.', 'Wed Apr 04 12:24:56 UTC 2018', 'Wed Apr 04 12:25:11 UTC 2018', 'text/html', 'en_US', '0', 'www.bct.io', '200', '/api/entries/9495', '1641694520728879104'],
  'content': '<div class="all"><div id="first"><div id="block1" class="block content"><div class="container"><div class="row"><div class="right img col-md-6"><div class="img"><img srcset="denied:&#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-1.png 404w, &#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-1-2x.png 808w" src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-1.png" width="404" alt="Databox integrations connect all your metrics in one place" /></div></div><div class="left text col-md-6"><small>Integrations</small><h3>\n                        <em>Track </em><em>everything</em> all in one place, from any device\n                    </h3><p>Connect all your data sources to track all your company’s performance in one place, from any device. Just one login to track <a href="https://databox.com/integration/google-analytics">Google Analytics</a>, <a href="https://databox.com/integration/hubspot">HubSpot</a>, <a href="https://databox.com/integration/salesforce">Salesforce</a>, <a href="https://databox.com/integration/facebook-ads">Facebook Ads</a>, <a href="https://databox.com/integration/adwords">Google AdWords</a>, and <a href="https://databox.com/integrations">50+ others</a>.</p></div></div></div></div><div id="block2" class="block content"><div class="container"><div class="row"><div class="left col-md-6"><div class="img"><img srcset="denied:&#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-2.png 426w, &#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-2-2x.png 852w" src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-2.png" width="426" alt="Databox library of metric templates" /></div></div><div class="right text col-md-6"><small>Templates</small><h3>\n                        Launch beautiful dashboards,\n                        <br class="visible-lg visible-md" /><em>no </em><em>coding </em><em>required</em>\n                    </h3><p>Choose from our <a href="https://databox.com/templates">library of pre-made templates</a>, or create your own dashboard using our drag and drop editor, and have beautiful, real-time visualizations of your data in minutes. </p></div></div></div></div><div id="block3" class="block content"><div class="container"><div class="row"><div class="right col-md-6"><div class="img"><img srcset="denied:&#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-3.png 426w, &#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-3-2x.png 852w" src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-3.png" width="426" alt="Databox set goal values for each metric" /></div></div><div class="left text col-md-6"><small>Goals</small><h3>\n                        Focus more on the\n                        <em>metrics </em><em>that </em><em>matter</em>\n                    </h3><p>Set goals and monitor progress in real time so your whole team can spot issues as they happen and make the adjustments needed to stay on target.</p></div></div></div></div><div id="block4" class="block content"><div class="container"><div class="row"><div class="left col-md-6"><div class="img"><img srcset="denied:&#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-4.png 426w, &#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-4-2x.png 852w" src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-4.png" width="426" alt="Databox alerts update as metrics change mobile email slack" /></div></div><div class="right text col-md-6"><small>Alerts</small><h3>\n                        Get updates on performance\n                        <br class="visible-lg visible-md" /><em>as </em><em>things </em><em>happen</em>\n                    </h3><p>Set alerts for progress on key metrics through push, email, or Slack. Add your analysis to any metric on a dashboard, automate daily and weekly summaries, and keep everyone up to date without copy and pasting into slide decks and with shorter, more action-oriented meetings.</p></div></div></div></div><div id="block5" class="block content"><div class="container"><div class="row"><div class="right col-md-6"><div class="img"><img srcset="denied:&#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-5.png 426w, &#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-5-2x.png 852w" src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-5.png" width="426" alt="Databox Query builder drilldown segmentation" /></div></div><div class="left text col-md-6"><small>Query Builder</small><h3>\n                        Drill deeper for more\n                        <em>advanced </em><em>insights</em>\n                    </h3><p>Segment and filter your data without writing code or manipulating columns and rows of data by using our Query Builder. Push data in via our API or use one of our SQL connectors to visualize anything.</p></div></div></div></div><div id="block6" class="block content"><div class="container"><div class="row"><div class="left col-md-6"><div class="img"><img srcset="denied:&#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-6.png 426w, &#10; https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-6-2x.png 852w" src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-product-6.png" width="426" alt="Databox partner program templates agencies growth advice" /></div></div><div class="right text col-md-6"><small>Partners</small><h3>\n                        Get help from our\n                        <em>community </em><em>of </em><em>experts</em>\n                    </h3><p>Based on your goals, receive advice sourced from <a href="https://databox.com/partners">100s of Databox certified partners</a>, or connect with any of them directly to get assistance one-on-one. </p></div></div></div></div><div id="featured-templates" class="content gray-row"><div class="container"><h2>Choose your first template and start tracking right now</h2><p class="title">Browse our library of pre-made templates and start tracking performance in minutes.</p><a href="https://databox.com/templates" class="allTemplates btn btn-gray btn-lg">Browse all templates</a></div></div><div id="block7" class="content"><div class="container"><div class="row"><div class="left col-sm-6"><h2>Business Software Reviews</h2><div class="row stars"><small>4.5 out of 5 stars</small><img src="https://databox.com/wp-content/themes/databox/inc/img/reviews/4-5stars.png" alt="4.5 out of 5 stars" width="194" height="28" /></div></div><div class="right col-sm-6"><p>“No doubt, Best Mobile Business Analytics solution on the market”</p><p>“Dashboard that I was looking for years!!!”</p><p>“End to my search for a mobile first analytics platform”</p><p>"It\'s my first to open app every morning.”</p><a href="https://databox.com/reviews" class="more">More reviews</a></div></div></div></div><div id="block8" class="content"><div class="container"><h3>The end of reporting decks and status meetings as you know them</h3><p class="title">With Databox, everyone stays in the loop and makes adjustments in real-time.</p><div class="row"><div class="col col-md-3 col-sm-6"><img src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-reporting-1.png" alt="Databox goals reporting" /><strong>Goals</strong><p>Set, track, and visualize goals in your dashboards.</p></div><div class="col col-md-3 col-sm-6"><img src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-reporting-2.png" alt="Databox annotations directly on metrics" /><strong>Annotations</strong><p>Include your analysis directly on any dashboard.</p></div><div class="col col-md-3 col-sm-6"><img src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-reporting-3.png" alt="Databox alerts for specific metrics and goals" /><strong>Alerts</strong><p>Get push notifications for specific metrics and goals.</p></div><div class="col col-md-3 col-sm-6"><img src="https://databox.com/wp-content/themes/databox/inc/img/first/databox-reporting-4.png" alt="Databox scorecard of favorite metrics daily or weekly" /><strong>Scorecards</strong><p>Automate daily and weekly summaries to your team.</p></div></div></div></div><div id="block9" class="content"><div class="container"><div id="cta-buttons" class="row"><p></p><h4>Sign up for your Databox account today.</h4>\n                    <a href="https://databox.com/signup" class="btn btn-green-darker btn-lg">Create your Free Account</a></div></div></div></div></div>&#13;\n<noscript><div>&#13;\n</div></noscript>',
  'content_text': 'Integrations  Track everything all in one place, from any device Connect all your data sources to track all your company’s performance in one place, from any device. Just one login to track Google Analytics , HubSpot , Salesforce , Facebook Ads , Google AdWords , and 50+ others . Templates Launch beautiful dashboards, no coding required  Choose from our library of pre-made templates , or create your own dashboard using our drag and drop editor, and have beautiful, real-time visualizations of your data in minutes. Goals Focus more on the metrics that matter  Set goals and monitor progress in real time so your whole team can spot issues as they happen and make the adjustments needed to stay on target. Alerts Get updates on performance as things happen  Set alerts for progress on key metrics through push, email, or Slack. Add your analysis to any metric on a dashboard, automate daily and weekly summaries, and keep everyone up to date without copy and pasting into slide decks and with shorter, more action-oriented meetings. Query Builder Drill deeper for more advanced insights  Segment and filter your data without writing code or manipulating columns and rows of data by using our Query Builder. Push data in via our API or use one of our SQL connectors to visualize anything. Partners Get help from our community of experts  Based on your goals, receive advice sourced from 100s of Databox certified partners , or connect with any of them directly to get assistance one-on-one. Choose your first template and start tracking right now Browse our library of pre-made templates and start tracking performance in minutes. Browse all templates Business Software Reviews 4.5 out of 5 stars “No doubt, Best Mobile Business Analytics solution on the market” “Dashboard that I was looking for years!!!” “End to my search for a mobile first analytics platform” “It\'s my first to open app every morning.” More reviews The end of reporting decks and status meetings as you know them With Databox, everyone stays in the loop and makes adjustments in real-time. Goals Set, track, and visualize goals in your dashboards. Annotations Include your analysis directly on any dashboard. Alerts Get push notifications for specific metrics and goals. Scorecards Automate daily and weekly summaries to your team. Sign up for your Databox account today.  Create your Free Account ',
  'created_at': '2018-04-05T20:20:11.000Z',
  'domain_name': 'databox.com',
  'http_status': '200',
  'is_archived': 1,
  'is_public': 'False',
  'is_starred': 0,
  'language': 'en',
  'links': ['/api/entries/9521'],
  'mimetype': 'text/html',
  'preview_picture': 'https://cdnwebsite.databox.com/wp-content/uploads/2017/10/19065436/databox_platform.png',
  'reading_time': 1,
  'slugs': ['sales-and-marketing', 'saas', 'kpi'],
  'tags': ['sales.and.marketing', 'saas', 'kpi'],
  'title': 'Mobile-First KPI Dashboards for Business | Databox',
  'updated_at': '2018-04-05T20:20:24.000Z',
  'url': 'https://databox.com/',
  'user_email': 'rahul.singh@anant.us',
  'user_id': '1',
  'user_name': 'admin'
};

let testRecord3 = {
  'id': 8946,
  'all': ['1', '0', 'admin', 'rahul.singh@anant.us', '1', 'javascript', 'interface', 'framework', 'javascript', 'interface', 'framework', '0', '8946', 'Metal.js', 'https://metaljs.com/', '<h4 class="highlight-title">Our Architecture</h4><img class="architecture-image-primary" src="https://metaljs.com/images/metal_architecture@2x.png" alt="Architecture" /><p class="highlight-description">Metal.js\' main classes are State and Component. Component actually extends from State, thus containing all its features. The main difference between the two is that Component\'s extra features are related to rendering. So you could just use State directly if your module doesn\'t do any rendering. But if your module does need rendering logic, then Component will work better for you.</p><p class="highlight-description">Many people have their own favorite way of dealing with rendering logic. Some prefer to use template languages that completely separate it from the business logic, while others like to keep both close together in the same file. Metal.js doesn\'t force developers to go with only one of those. By default it offers integration points with both closure templates from Google and JSX from Facebook, and it\'s possible to add more options, since the rendering layer is customizable.</p>', "Our Architecture Metal.js' main classes are State and Component. Component actually extends from State, thus containing all its features. The main difference between the two is that Component's extra features are related to rendering. So you could just use State directly if your module doesn't do any rendering. But if your module does need rendering logic, then Component will work better for you. Many people have their own favorite way of dealing with rendering logic. Some prefer to use template languages that completely separate it from the business logic, while others like to keep both close together in the same file. Metal.js doesn't force developers to go with only one of those. By default it offers integration points with both closure templates from Google and JSX from Facebook, and it's possible to add more options, since the rendering layer is customizable.", 'Sat Dec 30 11:18:48 UTC 2017', 'Sat Dec 30 11:30:33 UTC 2017', 'text/html', 'en', '0', 'metaljs.com', '200', '/api/entries/8946', '1641695047153876992'],
  'content': '<h4 class="highlight-title">Our Architecture</h4><img class="architecture-image-primary" src="https://metaljs.com/images/metal_architecture@2x.png" alt="Architecture" /><p class="highlight-description">Metal.js\' main classes are State and Component. Component actually extends from State, thus containing all its features. The main difference between the two is that Component\'s extra features are related to rendering. So you could just use State directly if your module doesn\'t do any rendering. But if your module does need rendering logic, then Component will work better for you.</p><p class="highlight-description">Many people have their own favorite way of dealing with rendering logic. Some prefer to use template languages that completely separate it from the business logic, while others like to keep both close together in the same file. Metal.js doesn\'t force developers to go with only one of those. By default it offers integration points with both closure templates from Google and JSX from Facebook, and it\'s possible to add more options, since the rendering layer is customizable.</p>',
  'content_text': 'Our Architecture Metal.js\' main classes are State and Component. Component actually extends from State, thus containing all its features. The main difference between the two is that Component\'s extra features are related to rendering. So you could just use State directly if your module doesn\'t do any rendering. But if your module does need rendering logic, then Component will work better for you. Many people have their own favorite way of dealing with rendering logic. Some prefer to use template languages that completely separate it from the business logic, while others like to keep both close together in the same file. Metal.js doesn\'t force developers to go with only one of those. By default it offers integration points with both closure templates from Google and JSX from Facebook, and it\'s possible to add more options, since the rendering layer is customizable.',
  'created_at': '2017-12-30T11:18:48.000Z',
  'domain_name': 'metaljs.com',
  'http_status': '200',
  'is_archived': 1,
  'is_public': 'False',
  'is_starred': 0,
  'language': 'en',
  'links': ['/api/entries/8946'],
  'mimetype': 'text/html',
  'preview_picture': 'https://dummyimage.com/170/000/ffffff&text=Metal.js',
  'reading_time': 0,
  'slugs': ['javascript', 'interface', 'framework'],
  'tags': ['javascript', 'interface', 'framework'],
  'title': 'Metal.js',
  'updated_at': '2017-12-30T11:30:33.000Z',
  'url': 'https://metaljs.com/',
  'user_email': 'rahul.singh@anant.us',
  'user_id': '1',
  'user_name': 'admin'
};


const insertRecord = (record) => {

  let query = 'insert into killrvideo.leaves JSON ?;'; 

  return client.execute(query, [JSON.stringify(record)], { prepare : true });

};


const cleanTable = () => {

  let truncateQuery = 'TRUNCATE killrvideo.leaves';

  return client.execute(truncateQuery);

};


const deleteRecord = (record) => {
    
  let deleteQuery = 'DELETE FROM killrvideo.leaves WHERE id=?;';

  let deleteParams = [record.id];

  return client.execute(deleteQuery, deleteParams, { prepare : true });
}; 


module.exports = {

  testRecord1,
  testRecord2,
  testRecord3,
  insertRecord,
  cleanTable,
  deleteRecord,
    
};