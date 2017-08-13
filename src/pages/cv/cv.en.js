import React from 'react';
import {
	Avatar, contactIconStyle, CvWrap, HighlightAbility, InfoItemList, InfoItemWrap, Job, Name, ProjectBlock,
	ProjectContent, ProjectName,
	ProjectType,
	SelectionTitle,
	SelfIntro,
	SkillItem,
	SkillName, SkillScore, SkillSelectionPersonal,
	SkillSelectionProfession, SkillTypeIcon,
	TimeLineContainer,
	TimeLineSelection,
	TimeLineSelectionDescription,
	TimeLineSelectionName, TimeLineSelectionSubTitle
} from "./cvComponents";
import {Button, Card, Progress, Tag} from "antd";
import { inject,observer } from 'mobx-react';

@inject("store")
@observer
export default class CVEN extends React.Component{
	render(){
		const { userStore }= this.props.store;
		const { cvShowType } = this.props.store.userStore;
		return <CvWrap>
			<div  style={{textAlign: 'center'}}>
				<Avatar src="/img/cv-photo.jpg"/>
				<Name>Zhang Qing</Name>
				<Job>Front-end Developer</Job>
				
				<div>
					<Button shape="circle" type="primary" style={contactIconStyle}>
						<a href="https://cn.linkedin.com/in/zhangqing332" target="_blank">
							<i className="fa fa-linkedin-square fa-fw fa-lg"/></a>
					</Button>
					<Button shape="circle" type="primary" style={contactIconStyle}>
						<a href="mailto:zhangqing332@live.com" target="_blank">
							<i className="fa fa-envelope-o fa-fw fa-lg"/>
						</a>
					
					</Button>
					<Button shape="circle" type="primary" style={contactIconStyle}>
						<a href="http://github.com/JennerChen" target="_blank">
							<i className="fa fa-github fa-fw fa-lg"/>
						</a>
					</Button>
				</div>
			</div>
			<SelectionTitle >Introduce</SelectionTitle>
			<Card style={{width: "100%"}}>
				<div className="clearfix">
					<InfoItemList>
						<InfoItemWrap>
							<Tag color="#108ee9">birth:</Tag>
							<span className="infoText">1991-09-07</span>
						</InfoItemWrap>
						
						<InfoItemWrap>
							<Tag color="#108ee9">job:</Tag>
							<span className="infoText">Senior Front-end Developer</span>
						</InfoItemWrap>
						
						<InfoItemWrap>
							<Tag color="#108ee9">address:</Tag>
							<span className="infoText">JiangSu/SuZhou/GuSu Strict</span>
						
						</InfoItemWrap>
						
						<InfoItemWrap>
							<Tag color="#108ee9">nationality:</Tag>
							<span className="infoText">China</span>
						
						</InfoItemWrap>
						
						<InfoItemWrap>
							<Tag color="#108ee9">tel:</Tag>
							<span className="infoText">181 1252 5542</span>
						
						</InfoItemWrap>
						
						<InfoItemWrap>
							<Tag color="#108ee9">E-mail:</Tag>
							<span className="infoText">zhangqing332@live.com</span>
						
						</InfoItemWrap>
						
						<InfoItemWrap>
							<Tag color="#108ee9"><i className="fa fa-linkedin-square fa-fw fa-lg"/>:</Tag>
							<span className="infoText">https://cn.linkedin.com/in/zhangqing332</span>
						
						</InfoItemWrap>
						
						<InfoItemWrap>
							<Tag color="#108ee9"><i className="fa fa-github fa-fw fa-lg"/>:</Tag>
							<span className="infoText">http://github.com/JennerChen</span>
						</InfoItemWrap>
					</InfoItemList>
					<SelfIntro lang="en">
						
						<p>
							Front-end Developer，Three years work experience, Mainly engaged in enterprise level web development , can build medium-small-size high-quality high-scalable web project independently.
						</p>
						<p>
							JavaScript fan, proficient in native JS develop, like research on trending front-end technology,
							Familiar with react and related build tools.  the pursuit of code Dry philosophy,advocating agile development,
							strive for complete the assignment in high quality as soon as possiable,
							and constantly optimize the existing technology stack, and strive for better solution.
						</p>
						<p>
							Good at analyzing the advantages and disadvantages of existing projects and solving problems in front-end development,
							Give a reasonable and feasible solution and continuously optimize the project。
						</p>
						<p>
							Familiar with and research on <HighlightAbility>jquery</HighlightAbility> plugin,
							Data visualization <HighlightAbility>d3.js</HighlightAbility> chart library,
							and <HighlightAbility>react</HighlightAbility>  related libraries。
							have adequate ability to develop custom components based on these three tech stack according to business requirements。<br/>
							Familiar with div+css responsive layout, and good at css。 <br/>
							Familiar with <HighlightAbility>gulp</HighlightAbility>, browserify, <HighlightAbility>webpack</HighlightAbility> front-end build tools。 <br/>
							Familiar with native JS develop, commonly using advance Javascript grammar in codebase e.g.<HighlightAbility>es6</HighlightAbility>, <HighlightAbility>es7</HighlightAbility><br/>
							know NodeJs back-end develop, can use nodejs(express, koa) develop simple back-end thing。<br/>
							know basic chrome plugin develop, electron desktop app develop。<br/>
						</p>
					</SelfIntro>
				</div>
			</Card>
			
			<SelectionTitle >Skills</SelectionTitle>
			<div className="clearfix">
				<SkillSelectionProfession>
					
					<Card style={ {width:"100%"} }>
						<SkillTypeIcon>
							<span className="fa fa-code"/>
							<h3>Professional</h3>
						</SkillTypeIcon>
						<SkillItem style={ {marginTop:40} }>
							<SkillName>Javascript</SkillName>
							<SkillScore>
								<Tag color="blue">es6</Tag>
								<Tag color="blue">jquery</Tag>
								<Tag color="blue">react</Tag>
								<Tag color="blue">d3</Tag>
							</SkillScore>
							<Progress percent={95} status="success"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>Css</SkillName>
							<SkillScore>
								<Tag color="blue">less</Tag>
								<Tag color="blue">postcss</Tag>
								<Tag color="blue">styled-components</Tag>
							</SkillScore>
							<Progress percent={75} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>HTML</SkillName>
							<SkillScore>
								<Tag color="blue">html5</Tag>
								<Tag color="blue">hbs</Tag>
							</SkillScore>
							<Progress percent={80} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>SVG</SkillName>
							<SkillScore>
								<Tag color="blue">d3</Tag>
								<Tag color="blue">snap.svg</Tag>
							</SkillScore>
							<Progress percent={90} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>Build</SkillName>
							<SkillScore>
								<Tag color="blue">gulp</Tag>
								<Tag color="blue">browserify</Tag>
								<Tag color="blue">webpack</Tag>
							</SkillScore>
							<Progress percent={75} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>NodeJS</SkillName>
							<SkillScore>
								<Tag color="blue">express</Tag>
								<Tag color="blue">koa</Tag>
								<Tag color="blue">nginx</Tag>
							</SkillScore>
							<Progress percent={60} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>UI DESIGN</SkillName>
							<SkillScore>
								<Tag color="blue">bootstrap</Tag>
								<Tag color="blue">material</Tag>
								<Tag color="blue">antd</Tag>
								<Tag color="blue">UI中国</Tag>
							</SkillScore>
							<Progress percent={30} status="active"/>
						</SkillItem>
					</Card>
				
				</SkillSelectionProfession>
				<SkillSelectionPersonal>
					<Card style={ {width:"100%"} }>
						<SkillTypeIcon>
							<span className="fa fa-user-circle"/>
							<h3>Personal</h3>
						</SkillTypeIcon>
						
						<SkillItem style={ {marginTop:40} }>
							<SkillName>Communication</SkillName>
							<Progress percent={70} status="active"/>
						</SkillItem>
						<SkillItem>
							<SkillName>Team Work</SkillName>
							<Progress percent={70} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>Creative</SkillName>
							<Progress percent={85} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>English</SkillName>
							<SkillScore>
								<Tag color="blue">CET-4</Tag>
								<Tag color="blue">IELTS</Tag>
							</SkillScore>
							<Progress percent={70} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>Firmness</SkillName>
							<Progress percent={80} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>Learning</SkillName>
							<Progress percent={80} status="active"/>
						</SkillItem>
						
						<SkillItem>
							<SkillName>Leadership</SkillName>
							<Progress percent={20} status="active"/>
						</SkillItem>
					</Card>
				</SkillSelectionPersonal>
			</div>
			
			<SelectionTitle style={ {marginBottom:35} }>Experience</SelectionTitle>
			<TimeLineContainer>
				<span className="fa fa-history timelineIcon"/>
				<TimeLineSelection>
					<Card style={ {width:"100%"} }>
						<TimeLineSelectionName>
							Yosemite Intelligent Systems Co..Ltd
						</TimeLineSelectionName>
						<TimeLineSelectionSubTitle>Front-end Developer</TimeLineSelectionSubTitle><br/>
						<Tag color="blue">2015 - now</Tag>
						<TimeLineSelectionDescription>
							As a front-end engineer,
							responsible for the development and maintenance of the front page architecture
							and reporting module for MLP (log analysis system),
							The project is a single page,
							large-size application that includes a large number of complex front-end logic,
							developing in Jquery and d3.
						
						</TimeLineSelectionDescription>
					
					</Card>
				</TimeLineSelection>
			</TimeLineContainer>
			
			<SelectionTitle >Projects</SelectionTitle>
			<div>
				<div style={ {textAlign:"center", marginBottom: 30} }>
					<Button.Group>
						<Button
							size={ "large" }
							type={  cvShowType === "all" ? "primary" : "" }
							onClick={ ()=> userStore.cvShowType = "all" }
						>
							All
						</Button>
						<Button
							size={ "large" }
							type={ cvShowType === "team" ? "primary" : "" }
							onClick={ ()=> userStore.cvShowType = "team" }
						>
							Team
						</Button>
						<Button
							size={ "large" }
							type={ cvShowType === "person" ? "primary" : "" }
							onClick={ ()=> userStore.cvShowType = "person" }
						>
							Individual
						</Button>
					
					</Button.Group>
				</div>
				<div className="clearfix" style={ {margin:"0 -5px"} }>
					<ProjectBlock show={ cvShowType === "all" || cvShowType === "team" }>
						<Card style={ {width:"100%",height:"100%"} }>
							<ProjectName>Machine Learning Processor</ProjectName>
							<ProjectType>Team</ProjectType>
							<ProjectContent>
								MLP is a large distributed log analysis system, mainly help customer analysis logs,
								and provide alerts and data visulization;
							</ProjectContent>
							<ProjectContent>
								I am mainly responsible for the development and maintenance of the project report page and the construction of the front page.
								Users can visually display data by dragging and configuring charts in the report page, eliminating the pain of writing code.
								The front end project is fully driven by a single page application of javascript,
								Through the iframe to achieve the jump of each page module, in the top-level page to set up public components, to achieve the purpose of state synchronization
							</ProjectContent>
						</Card>
					</ProjectBlock>
					<ProjectBlock show={ cvShowType === "all" || cvShowType === "team" }>
						<Card style={ {width:"100%",height:"100%"} }>
							<ProjectName>找个律师(zhaogelvshi)</ProjectName>
							<ProjectType>Team</ProjectType>
							<ProjectContent>
								A lawyer related App simple coming soon pure static page,
								Applied to gulp packaging, less compilation, CSS, and a jQuery plug-in, fullpage.js.
								The project is hosted in GitHub.
							</ProjectContent>
							<ProjectContent>
								<a href="https://github.com/JennerChen/lawyer" target="_blank">Source</a>
							</ProjectContent>
						</Card>
					</ProjectBlock>
					<ProjectBlock show={ cvShowType === "all" || cvShowType === "person" }>
						<Card style={ {width:"100%",height:"100%"} }>
							<ProjectName>Personal Cloud Disk</ProjectName>
							<ProjectType>Individual</ProjectType>
							<ProjectContent>
								
								Currently the project is uploaded and downloaded files from the server, the server deployed in Ali cloud,
								relying on Ali OSS object storage file, save or share personal files.
								This project is used to explore the latest technology in general research, so all of the technology stack can be used as far as possible at the trending.
							</ProjectContent>
							<ProjectContent>
								Current stack: react +  redux + material design + antd
							</ProjectContent>
							<ProjectContent>
								Developing Version 2: using mobx + react replace react + redux;and boost nodeJs backend。current CV is one part of v2。
							</ProjectContent>
							<ProjectContent>
								<a href="https://github.com/JennerChen/simple-personal-cloudyService/tree/master"
								   target="_blank">
									current source</a><br/>
								<a href="https://github.com/JennerChen/simple-personal-cloudyService/tree/koa-mobx-v2" target="_blank">v2 source</a>
							</ProjectContent>
						</Card>
					</ProjectBlock>
					
					<ProjectBlock show={ cvShowType === "all" || cvShowType === "person" }>
						<Card style={ {width:"100%",height:"100%"} }>
							<ProjectName>json-html-viewer</ProjectName>
							<ProjectType>Individual</ProjectType>
							<ProjectContent>
								An react based convert json data into html format plugin, it support json code highlight, collapse/expand.
							</ProjectContent>
							<ProjectContent>
								<a href="https://github.com/JennerChen/json-html-viewer"
								   target="_blank">
									source</a><br/>
								<a href="https://npm.taobao.org/package/json-html-viewer"
								   target="_blank">
									cnpm</a>
							</ProjectContent>
						</Card>
					</ProjectBlock>
					
					<ProjectBlock show={ cvShowType === "all" || cvShowType === "person" }>
						<Card style={ {width:"100%",height:"100%"} }>
							<ProjectName>redmineAutoFill</ProjectName>
							<ProjectType>Individual</ProjectType>
							<ProjectContent>
								Project management tool redmine Google plug-in,
								the company project management contains fixed format,
								each time you need to fill the form in same placeholder, it's waste time doing that. Therefore developing a simple Google plug-in,
								Fill in the form automatically, boost work efficiency;
							</ProjectContent>
							<ProjectContent>
								<a href="https://github.com/JennerChen/redmineAutoFill"
								   target="_blank">
									source</a><br/>
							</ProjectContent>
						</Card>
					</ProjectBlock>
				</div>
			
			</div>
			
			<SelectionTitle style={ {marginBottom:35} }>Education</SelectionTitle>
			
			<TimeLineContainer>
				<span className="fa fa-certificate timelineIcon"/>
				<TimeLineSelection>
					<Card style={ {width:"100%"} }>
						<TimeLineSelectionName>
							Dublin Institute of Technology
						</TimeLineSelectionName>
						<TimeLineSelectionSubTitle>Graduate-Advance Software Development</TimeLineSelectionSubTitle><br/>
						<Tag color="blue">2014 - 2015</Tag>
						<TimeLineSelectionDescription>
							Study for a graduate degree and study courses in software design and development domain,
							For example, Agile Development, advanced database ,pprogramming, paradigm
							And 3 programming languages, Haskell, Lua, Prolog
						</TimeLineSelectionDescription>
						<img
							width={ 80 }
							style={ {position:"absolute",top:25,right:25} }
							src="http://m.c.lnkd.licdn.com/mpr/mpr/shrinknp_100_100/p/1/005/011/0b2/16b983d.png"/>
					
					</Card>
				</TimeLineSelection>
				
				
				<TimeLineSelection floatToRight>
					<Card style={ {width:"100%"} }>
						<TimeLineSelectionName>
							Waterford Institute of Technology
						</TimeLineSelectionName>
						<TimeLineSelectionSubTitle>Undergraduate(4th-year)-Software Development </TimeLineSelectionSubTitle><br/>
						<Tag color="blue">2013 - 2014</Tag>
						<TimeLineSelectionDescription>
							Undergraduate study 4th-year, the main course contains web development, web security, Android development, Java
						</TimeLineSelectionDescription>
						<img
							width={ 80 }
							style={ {position:"absolute",top:25,right:25} }
							src="http://m.c.lnkd.licdn.com/mpr/mpr/shrinknp_100_100/p/5/005/010/0a9/311503b.png"/>
					</Card>
				</TimeLineSelection>
				
				<TimeLineSelection>
					<Card style={ {width:"100%"} }>
						<TimeLineSelectionName>
							Nanjing University of Information Science and Technology
						</TimeLineSelectionName>
						<TimeLineSelectionSubTitle>Undergraduate-Software Engineering</TimeLineSelectionSubTitle><br/>
						<Tag color="blue">2010 - 2013</Tag>
						<TimeLineSelectionDescription>
							Learning software development,
							the main courses include Java, software engineering, computer networks, data structures and other computer theoretical knowledge
						</TimeLineSelectionDescription>
						<img
							width={ 80 }
							style={ {position:"absolute",top:25,right:25} }
							src="http://m.c.lnkd.licdn.com/mpr/mpr/shrinknp_100_100/p/3/005/0ad/16d/17e00a5.png"/>
					</Card>
				</TimeLineSelection>
			</TimeLineContainer>
		</CvWrap>
	}
}