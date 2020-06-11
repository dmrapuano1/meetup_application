(this.webpackJsonpmeetup_application=this.webpackJsonpmeetup_application||[]).push([[0],{21:function(e,n,t){e.exports=t(46)},26:function(e,n,t){},27:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(19),s=t.n(r),o=(t(26),t(1)),l=t(5),c=t(2),u=t(3),d=(t(27),function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={extend:!1},e.findDetails=function(){e.setState({extend:!0})},e.hideDetails=function(){e.setState({extend:!1})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,n=this.state.extend,t=this.props.event;return!1===n?i.a.createElement("div",{className:"event",key:t.id},i.a.createElement("div",{className:"dateAndTime"},t.local_time," - ",t.local_date),i.a.createElement("div",{className:"eventName"},t.name),i.a.createElement("div",{className:"groupName"},"Group: ",t.group.name),i.a.createElement("div",{className:"peopleGoing"},t.yes_rsvp_count," people are going"),i.a.createElement("button",{className:"detailsBtn",onClick:function(){return e.findDetails()}},"Details")):!0===n&&void 0!==t.venue?i.a.createElement("div",{className:"event",key:t.id},i.a.createElement("div",{className:"dateAndTime"},t.local_time," - ",t.local_date),i.a.createElement("div",{className:"eventName"},t.name),i.a.createElement("div",{className:"groupName"},"Group: ",t.group.name),i.a.createElement("div",{className:"peopleGoing"},t.yes_rsvp_count," people are going"),i.a.createElement("div",{className:"address"},t.venue.address_1,", ",t.venue.city,", ",t.venue.state," ",t.venue.zip),i.a.createElement("div",{className:"description"},t.description),i.a.createElement("div",{className:"visibility"},t.visibility),i.a.createElement("div",null,i.a.createElement("a",{className:"link",href:t.link,target:"_blank",rel:"noopener noreferrer"},"Event link")),i.a.createElement("button",{className:"closeBtn",onClick:function(){return e.hideDetails()}},"Close")):i.a.createElement("div",{className:"event",key:t.id},i.a.createElement("div",{className:"dateAndTime"},t.local_time," - ",t.local_date),i.a.createElement("div",{className:"eventName"},t.name),i.a.createElement("div",{className:"groupName"},"Group: ",t.group.name),i.a.createElement("div",{className:"peopleGoing"},t.yes_rsvp_count," people are going"),i.a.createElement("div",{className:"description"},t.description),i.a.createElement("div",{className:"visibility"},t.visibility),i.a.createElement("div",null,i.a.createElement("a",{className:"link",href:t.link,target:"_blank",rel:"noopener noreferrer"},"Event link")),i.a.createElement("button",{className:"closeBtn",onClick:function(){return e.hideDetails()}},"Close"))}}]),t}(a.Component)),p=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Alert"},i.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),m=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).color="blue",a}return t}(p),h=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).color="orange",a}return t}(p),g=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).color="red",a}return t}(p),f=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={infoText:""},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("offline")?this.setState({infoText:"WARNING: App is running offline. Events may not be up to date. Connect to the internet to get the most up to date information."}):this.setState({infoText:""})}},{key:"render",value:function(){return i.a.createElement("ul",{className:"EventList"},i.a.createElement(h,{text:this.state.infoText}),this.props.events.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(d,{event:e}))})))}}]),t}(a.Component),b=t(6),w=t.n(b),v=t(7),k=[{created:1586186779e3,duration:72e5,id:"269891185",name:"IBM Masterclass & Hackathon: AI Explainability",date_in_series_pattern:!1,status:"upcoming",time:15883164e5,local_date:"2020-05-01",local_time:"09:00",updated:1586186779e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:26,is_online_event:!1,group:{created:1400181332e3,name:"Big Data Developers in Munich",id:14476282,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Big-Data-Developers-in-Munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Big-Data-Developers-in-Munich/events/269891185/",description:"<p>Go beyond the code, advance towards responsible and trustworthy AI. Begins March 27, 2020 and ends May 1, 2020. This is a free on-line webinar that can be accessed at any time.</p> <p>REGISTER HERE FOR THIS FREE COURSE &amp; EVENT: ibm.biz/AIExplainability</p> <p>Take our free masterclass and then apply your new skills in the online Hackathon. Come learn new open-source and IBM data science tools like AIX360 and Lale. As well as, how to explain your model to any stakeholder and how to integrate explainable workflows.</p> <p>MASTERCLASS<br/>Quickly learn new data science concepts with this free 90-minute micro-course.</p> <p>HACKATHON<br/>Apply these new concepts by creating your own project to showcase and compete for the $8,000 prizepool and an IBM skill badge.</p> <p>MENTORSHIP<br/>Connect 1:1 with IBM data science experts for help and guidance on your project.</p> <p>WHO IS THIS FOR?<br/>All Data Scientists, AI &amp; ML Devs and Engineers, Startups and Enterprise</p> <p>WHY EXPLAINABILITY?<br/>Explainability is the ability for data scientists to produce applicable results for their peers, managers, and end-users. Can your results be understood and applied by other data scientists and stakeholders? It is up to you as a data scientist to use your business knowledge, mathematical, and programmatic skills to communicate your findings and methods. Explainability is an important tool used to make your reasoning behind each decision transparent and repeatable.</p> <p>In this course, learn the importance of building an explainability workflow and how to implement these practices from the beginning. Then, using your new skills and tools, apply what you have learned by submitting your own project. Each submission for the hackathon will have a chance at cash prizes during the 6-week competition.<br/>-------------------------------------------------</p> <p>REGISTER HERE FOR THIS FREE COURSE &amp; EVENT: ibm.biz/AIExplainability</p> ",visibility:"public",pro_is_email_shared:!1,member_pay_fee:!1},{created:1584390889e3,duration:144e5,id:"269466550",name:"3. agiles PM-Trendforum 2020 (digital) am 25.06.2020",date_in_series_pattern:!1,status:"upcoming",time:15931008e5,local_date:"2020-06-25",local_time:"18:00",updated:1586174006e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:13,is_online_event:!1,group:{created:1430647334e3,name:"Projektmanagement Meetup Roundtable",id:18574027,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Projektmanagement-Meetup-Roundtable",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Projektmanagement-Meetup-Roundtable/events/269466550/",description:"<p>Agenda:</p> <p>18:00 Uhr \u2013 Begr\xfc\xdfung, Einleitung, Infos zum Ablauf</p> <p>18:15 Uhr \u2013 Vortrag 1: -&gt; \u201eOffice 365 \u2013Professionelles Arbeiten im Homeoffice: Wie k\xf6nnen die Office 365 und Edison 365 Apps ideal f\xfcr das Arbeiten im Homeoffice genutzt werden? \u2013 Digitaler Arbeitsplatz der Zukunft in Corona Zeiten</p> <p>Vortrag Herr Andreas Hock, Partner 3Pworx GmbH</p> <p>'Aufgrund der derzeitigen Corona Krise muss rasch ein digitaler Arbeitsplatz geschaffen werden \u2013 und zwar im Homeoffice, der allen Anforderungen gen\xfcgt'</p> <p>Millionen von Personen in Deutschland wurden zum Arbeiten ins Homeoffice geschickt. Wie kann der Spagat gelingen?<br/>Eine der f\xfchrenden professionellen L\xf6sungen, um effizient und professionell vom Homeoffice aus arbeitsf\xe4hig zu sein ist Office 365.<br/>Office 365 bietet hier vor allem interessante L\xf6sungen und Apps aus dem Bereich der digitalen Zusammenarbeit, wie MS Teams, MS Planner, MS Power BI.</p> <p>Agile Methoden f\xfcr Projekte werden ebenfalls verst\xe4rkt unterst\xfctzt.<br/><a href='https://3pworx.com/projektmanagement-mit-office-365/' class='linkified'>https://3pworx.com/projektmanagement-mit-office-365/</a></p> <p>Dieses Paket kann im Homeoffice durch L\xf6sungen aus dem Bereich Ideenmanagement, Business Cases und Projekt-Kollaboration mit den fertigen Edison 365 Produktl\xf6sungen intelligent und nachhaltig erweitert werden.</p> <p>Die nahtlose Integration ins Office 365 Umfeld ist sehr einfach darstellbar. Weitere Schnittstellen zu MS Teams, usw. sind schl\xfcsselfertig.</p> <p><a href='https://3pworx.com/edison-365/' class='linkified'>https://3pworx.com/edison-365/</a></p> <p>In diesem Webinar schildern wie Ihnen einige Anwendungsf\xe4lle, wie Sie schnell Office 365 ideal f\xfcrs Homeoffice nutzen k\xf6nnen uns wir geben Ihnen einen interessanten Einblick der Erweiterung mit der Edison 365 Toolsuite, um hier einen zus\xe4tzlichen Mehrwert zu erhalten.</p> <p>19:15 Uhr \u2013 Vortrag 2: \u201eErfolgreich handeln in der Corona Krise \u2013 Funktionierende Managementprinzipien</p> <p>Vortrag von Herrn Prof. Dr. Komus</p> <p>Die aktuelle Corona-Krise sch\xfcttelt Wirtschaft, Management und Privatleben grundlegend durcheinander. Gute Entscheidungen sind schwierig \u2013 Sicherheit ist nicht zu haben.</p> <p>Trotzdem oder besser gerade deswegen gilt es, zu reflektieren, welche Entscheidungsmuster und Managementprinzipien in welchem Kontext funktionieren.</p> <p>Um die aktuellen Herausforderungen zu managen reichen selbst agile Methoden wie Scrum so wie sie meist gelebt werden nicht aus.</p> <p>Handlungsmuster f\xfcr das komplex-chaotische Umfeld wie \u201eMaxAgil\u201c (die pragmatische Maximierung agiler Prinzipien) oder \u201eEffectuation\u201c versprechen bessere Ergebnisse. Gleichwohl gilt es auch in der Corona-Krise differenziert sinnvolle L\xf6sungsans\xe4tze zu entwickeln. Der Beitrag zeigt wie das funktionieren kann und welche Schritte zu gehen sind.<br/>Prof. Dr. Ayelt Komus ist seit langem Experten und Vordenker f\xfcr erfolgreiches Management bei Unsicherheit. Es hat fr\xfch die Potenziale und Anwendungsfelder und Grenzen agiler Methoden aufgezeigt. Seine Schwerpunkte sind agile und hybride Methoden auf Ebene von Projektportfolio, Programm und Unternehmen (Scaled Agile).</p> <p>20:15 Uhr \u2013 Vortrag 3: \u201eHybrides Projektmanagement \u2013 Vorstellung der Studienergebnisse</p> <p>Vortrag von Herrn Gregor Diem</p> <p>Seit mehr als einem Jahr forscht Gregor Diem an der Edinburgh Business School, Schottland, UK, an dem Thema hybrides Projektmanagement.</p> <p>Ziel dieser Studie ist es, ein besseres Verst\xe4ndnis des hybriden Projektmanagements zu erlangen und den j\xfcngsten Trend in dieser Disziplin zu untersuchen, bei dem agile und traditionelle Projektmanagementpraktiken kombiniert werden. Daher ist auch das Ziel dieser Studie mehr \xfcber diesen Trend und wie dieser in der Praxis angewendet wird zu erfahren.</p> <p>Die Umfrage kann \xfcber folgenden Link aufgerufen werden: <a href='https://hwsml.eu.qualtrics.com/jfe/form/SV_2tyWt5wjIOYDBTD' class='linkified'>https://hwsml.eu.qualtrics.com/jfe/form/SV_2tyWt5wjIOYDBTD</a></p> <p>Erste Ergebnisse werden im agilen Trendforum gigital am Do. [masked] vorgestellt. \xdcber eine rege Umfrageteilnahme und anschlie\xdfender Diskussion im agilen Trendforum w\xfcrden wir uns sehr freuen.</p> <p>21:30 Uhr: Q&amp;A</p> <p>Ca. 22:00 Uhr - Ende des 3Pworx 3. Agilen Trendforums Juni 2020 digital</p> ",visibility:"public",member_pay_fee:!1},{created:1586254041e3,duration:36e5,id:"269906778",name:"PRACTICING GERMAN MEETUP B1",rsvp_limit:15,date_in_series_pattern:!1,status:"upcoming",time:15874884e5,local_date:"2020-04-21",local_time:"19:00",updated:1586254041e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:9,is_online_event:!1,group:{created:1553169681e3,name:"Foreigners Feeling Comfortable In Munich",id:31442074,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Foreigners-Feeling-Comfortable-In-Munich",who:"Miembros",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Foreigners-Feeling-Comfortable-In-Munich/events/269906778/",description:"<p>Join our meeting in Zoom:<br/><a href='https://us04web.zoom.us/j/2953797303' class='linkified'>https://us04web.zoom.us/j/2953797303</a><br/>----------------</p> <p>We meet online to get to know each other and talk in German.<br/>This Meetup is for German learner level around B1.<br/>I'm a professional German teacher, so you can also ask me questions and I will also explain you some things.</p> <p>THIS IS FOR YOU:<br/>If you want to USE the time to practice your German skills, learn also something new and meet new people. You can create learning partners or stay in touch afterwards.<br/>If you have a German level around B1.</p> <p>This is a offer of LANGUAGE SUCCESS<br/>Language Success - Mit Sprache zum Erfolg<br/>www.languagesuccess.org</p> ",visibility:"public",member_pay_fee:!1}],y=[{created:1586186779e3,duration:72e5,id:"269891185",name:"IBM Masterclass & Hackathon: AI Explainability",date_in_series_pattern:!1,status:"upcoming",time:15883164e5,local_date:"2020-05-01",local_time:"09:00",updated:1586186779e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:26,is_online_event:!1,group:{created:1400181332e3,name:"Big Data Developers in Munich",id:14476282,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Big-Data-Developers-in-Munich",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Big-Data-Developers-in-Munich/events/269891185/",description:"<p>Go beyond the code, advance towards responsible and trustworthy AI. Begins March 27, 2020 and ends May 1, 2020. This is a free on-line webinar that can be accessed at any time.</p> <p>REGISTER HERE FOR THIS FREE COURSE &amp; EVENT: ibm.biz/AIExplainability</p> <p>Take our free masterclass and then apply your new skills in the online Hackathon. Come learn new open-source and IBM data science tools like AIX360 and Lale. As well as, how to explain your model to any stakeholder and how to integrate explainable workflows.</p> <p>MASTERCLASS<br/>Quickly learn new data science concepts with this free 90-minute micro-course.</p> <p>HACKATHON<br/>Apply these new concepts by creating your own project to showcase and compete for the $8,000 prizepool and an IBM skill badge.</p> <p>MENTORSHIP<br/>Connect 1:1 with IBM data science experts for help and guidance on your project.</p> <p>WHO IS THIS FOR?<br/>All Data Scientists, AI &amp; ML Devs and Engineers, Startups and Enterprise</p> <p>WHY EXPLAINABILITY?<br/>Explainability is the ability for data scientists to produce applicable results for their peers, managers, and end-users. Can your results be understood and applied by other data scientists and stakeholders? It is up to you as a data scientist to use your business knowledge, mathematical, and programmatic skills to communicate your findings and methods. Explainability is an important tool used to make your reasoning behind each decision transparent and repeatable.</p> <p>In this course, learn the importance of building an explainability workflow and how to implement these practices from the beginning. Then, using your new skills and tools, apply what you have learned by submitting your own project. Each submission for the hackathon will have a chance at cash prizes during the 6-week competition.<br/>-------------------------------------------------</p> <p>REGISTER HERE FOR THIS FREE COURSE &amp; EVENT: ibm.biz/AIExplainability</p> ",visibility:"public",pro_is_email_shared:!1,member_pay_fee:!1},{created:1584390889e3,duration:144e5,id:"269466550",name:"3. agiles PM-Trendforum 2020 (digital) am 25.06.2020",date_in_series_pattern:!1,status:"upcoming",time:15931008e5,local_date:"2020-06-25",local_time:"18:00",updated:1586174006e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:13,is_online_event:!1,group:{created:1430647334e3,name:"Projektmanagement Meetup Roundtable",id:18574027,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Projektmanagement-Meetup-Roundtable",who:"Mitglieder",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Projektmanagement-Meetup-Roundtable/events/269466550/",description:"<p>Agenda:</p> <p>18:00 Uhr \u2013 Begr\xfc\xdfung, Einleitung, Infos zum Ablauf</p> <p>18:15 Uhr \u2013 Vortrag 1: -&gt; \u201eOffice 365 \u2013Professionelles Arbeiten im Homeoffice: Wie k\xf6nnen die Office 365 und Edison 365 Apps ideal f\xfcr das Arbeiten im Homeoffice genutzt werden? \u2013 Digitaler Arbeitsplatz der Zukunft in Corona Zeiten</p> <p>Vortrag Herr Andreas Hock, Partner 3Pworx GmbH</p> <p>'Aufgrund der derzeitigen Corona Krise muss rasch ein digitaler Arbeitsplatz geschaffen werden \u2013 und zwar im Homeoffice, der allen Anforderungen gen\xfcgt'</p> <p>Millionen von Personen in Deutschland wurden zum Arbeiten ins Homeoffice geschickt. Wie kann der Spagat gelingen?<br/>Eine der f\xfchrenden professionellen L\xf6sungen, um effizient und professionell vom Homeoffice aus arbeitsf\xe4hig zu sein ist Office 365.<br/>Office 365 bietet hier vor allem interessante L\xf6sungen und Apps aus dem Bereich der digitalen Zusammenarbeit, wie MS Teams, MS Planner, MS Power BI.</p> <p>Agile Methoden f\xfcr Projekte werden ebenfalls verst\xe4rkt unterst\xfctzt.<br/><a href='https://3pworx.com/projektmanagement-mit-office-365/' class='linkified'>https://3pworx.com/projektmanagement-mit-office-365/</a></p> <p>Dieses Paket kann im Homeoffice durch L\xf6sungen aus dem Bereich Ideenmanagement, Business Cases und Projekt-Kollaboration mit den fertigen Edison 365 Produktl\xf6sungen intelligent und nachhaltig erweitert werden.</p> <p>Die nahtlose Integration ins Office 365 Umfeld ist sehr einfach darstellbar. Weitere Schnittstellen zu MS Teams, usw. sind schl\xfcsselfertig.</p> <p><a href='https://3pworx.com/edison-365/' class='linkified'>https://3pworx.com/edison-365/</a></p> <p>In diesem Webinar schildern wie Ihnen einige Anwendungsf\xe4lle, wie Sie schnell Office 365 ideal f\xfcrs Homeoffice nutzen k\xf6nnen uns wir geben Ihnen einen interessanten Einblick der Erweiterung mit der Edison 365 Toolsuite, um hier einen zus\xe4tzlichen Mehrwert zu erhalten.</p> <p>19:15 Uhr \u2013 Vortrag 2: \u201eErfolgreich handeln in der Corona Krise \u2013 Funktionierende Managementprinzipien</p> <p>Vortrag von Herrn Prof. Dr. Komus</p> <p>Die aktuelle Corona-Krise sch\xfcttelt Wirtschaft, Management und Privatleben grundlegend durcheinander. Gute Entscheidungen sind schwierig \u2013 Sicherheit ist nicht zu haben.</p> <p>Trotzdem oder besser gerade deswegen gilt es, zu reflektieren, welche Entscheidungsmuster und Managementprinzipien in welchem Kontext funktionieren.</p> <p>Um die aktuellen Herausforderungen zu managen reichen selbst agile Methoden wie Scrum so wie sie meist gelebt werden nicht aus.</p> <p>Handlungsmuster f\xfcr das komplex-chaotische Umfeld wie \u201eMaxAgil\u201c (die pragmatische Maximierung agiler Prinzipien) oder \u201eEffectuation\u201c versprechen bessere Ergebnisse. Gleichwohl gilt es auch in der Corona-Krise differenziert sinnvolle L\xf6sungsans\xe4tze zu entwickeln. Der Beitrag zeigt wie das funktionieren kann und welche Schritte zu gehen sind.<br/>Prof. Dr. Ayelt Komus ist seit langem Experten und Vordenker f\xfcr erfolgreiches Management bei Unsicherheit. Es hat fr\xfch die Potenziale und Anwendungsfelder und Grenzen agiler Methoden aufgezeigt. Seine Schwerpunkte sind agile und hybride Methoden auf Ebene von Projektportfolio, Programm und Unternehmen (Scaled Agile).</p> <p>20:15 Uhr \u2013 Vortrag 3: \u201eHybrides Projektmanagement \u2013 Vorstellung der Studienergebnisse</p> <p>Vortrag von Herrn Gregor Diem</p> <p>Seit mehr als einem Jahr forscht Gregor Diem an der Edinburgh Business School, Schottland, UK, an dem Thema hybrides Projektmanagement.</p> <p>Ziel dieser Studie ist es, ein besseres Verst\xe4ndnis des hybriden Projektmanagements zu erlangen und den j\xfcngsten Trend in dieser Disziplin zu untersuchen, bei dem agile und traditionelle Projektmanagementpraktiken kombiniert werden. Daher ist auch das Ziel dieser Studie mehr \xfcber diesen Trend und wie dieser in der Praxis angewendet wird zu erfahren.</p> <p>Die Umfrage kann \xfcber folgenden Link aufgerufen werden: <a href='https://hwsml.eu.qualtrics.com/jfe/form/SV_2tyWt5wjIOYDBTD' class='linkified'>https://hwsml.eu.qualtrics.com/jfe/form/SV_2tyWt5wjIOYDBTD</a></p> <p>Erste Ergebnisse werden im agilen Trendforum gigital am Do. [masked] vorgestellt. \xdcber eine rege Umfrageteilnahme und anschlie\xdfender Diskussion im agilen Trendforum w\xfcrden wir uns sehr freuen.</p> <p>21:30 Uhr: Q&amp;A</p> <p>Ca. 22:00 Uhr - Ende des 3Pworx 3. Agilen Trendforums Juni 2020 digital</p> ",visibility:"public",member_pay_fee:!1}],E=t(8),_=t.n(E);function S(e){return z.apply(this,arguments)}function z(){return(z=Object(v.a)(w.a.mark((function e(n){var t,a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,M();case 4:if(!(t=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+n+"&access_token="+t,e.next=9,_.a.get(a);case 9:return i=e.sent,e.abrupt("return",i.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,n,t){return I.apply(this,arguments)}function I(){return(I=Object(v.a)(w.a.mark((function e(n,t,a){var i,r,s,o,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=6;break}if(!n||!t){e.next=5;break}return e.abrupt("return",k);case 5:return e.abrupt("return",y);case 6:if(navigator.onLine){e.next=12;break}return localStorage.setItem("offline",!0),i=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(i));case 12:localStorage.setItem("offline",!1);case 13:return e.next=15,M();case 15:if(!(r=e.sent)){e.next=26;break}return s="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,n&&t&&(s+="&lat="+n+"&lon="+t),s+="&page="+a,e.next=22,_.a.get(s);case 22:return o=e.sent,(l=o.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(l)),e.abrupt("return",l);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){var e=localStorage.getItem("access_token");if(!e){var n=new URLSearchParams(window.location.search).get("code");return n?j("get",n):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=i67qnj61hami3bb3q1c50vkai2&response_type=code&redirect_uri=https://dmrapuano1.github.io/meetup_application/",null)}var t=localStorage.getItem("last_saved_time");return e&&Date.now()-t<36e5?e:j("renew",localStorage.getItem("refresh_token"))}function j(e,n){return x.apply(this,arguments)}function x(){return(x=Object(v.a)(w.a.mark((function e(n,t){var a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===n?a=" https://aagvnld9v9.execute-api.us-east-2.amazonaws.com/dev/api/token/"+t:"renew"===n&&(a=" https://aagvnld9v9.execute-api.us-east-2.amazonaws.com/dev/api/refresh/"+t),e.next=3,_.a.get(a);case 3:return i=e.sent,localStorage.setItem("access_token",i.data.access_token),localStorage.setItem("refresh_token",i.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",i.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={query:"",suggestions:[]},e.handleInputChanged=function(n){var t=n.target.value;e.setState({query:t}),S(t).then((function(n){e.setState({suggestions:n}),t&&1===t.length?e.setState({infoText:"Search must have at least 2 characters"}):t&&0===n.length?e.setState({infoText:"No city was found that matched your search. Please try again."}):e.setState({infoText:""})}))},e.handleItemClicked=function(n,t,a){e.setState({query:n,suggestions:[]}),e.props.updateEvents(t,a)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"CitySearch"},i.a.createElement(m,{text:this.state.infoText}),i.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),i.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(n){return i.a.createElement("li",{key:n.name_string,onClick:function(){e.handleItemClicked(n.name_string,n.lat,n.lon)}},n.name_string)}))))}}]),t}(a.Component),O=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={eventNumber:32},e.handleInputChanged=function(n){var t=n.target.value;e.setState({eventNumber:t}),t<0||0==t||!t?(e.setState({infoText:"Value must be at least 1"}),e.props.updateCount(1)):t>250?(e.setState({infoText:"Value must be less than 250"}),e.props.updateCount(250)):(e.setState({infoText:""}),e.props.updateCount(t))},e}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"NumberOfEvents"},i.a.createElement(g,{text:this.state.infoText}),"Show",i.a.createElement("input",{type:"number",className:"totalEvents",value:this.state.eventNumber,onChange:this.handleInputChanged}),"Events")}}]),t}(a.Component),C=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=n.call.apply(n,[this].concat(i))).state={events:[],lat:null,lon:null,num:32},e.updateEvents=function(n,t){A(n,t,e.state.num).then((function(n){return e.setState({events:n})})),e.setState({lat:n,lon:t})},e.updateCount=function(n){A(e.state.lat,e.state.lon,n).then((function(n){return e.setState({events:n})})),e.setState({num:n})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;A().then((function(n){return e.setState({events:n})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(T,{updateEvents:this.updateEvents}),i.a.createElement(O,{updateCount:this.updateCount}),i.a.createElement(f,{events:this.state.events}))}}]),t}(a.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=t(20);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup_application",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/meetup_application","/service-worker.js");D?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(n,e)}))}}(),P.config("a06c310c6bb8486d958d1309be34f987").install()}},[[21,1,2]]]);
//# sourceMappingURL=main.12562e72.chunk.js.map