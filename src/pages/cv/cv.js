import React from 'react';
import styled from 'styled-components';
import {Button, Card, Progress , Tag} from 'antd';
import { spring, Motion, presets } from 'react-motion';
/** global: Particle */
const CVHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background: #304fff;
    z-index:100;
`;
const ParticleContainer = styled.div`
    width: 100%;
	height: 100%;
	background-color: #d4d4d4;
	background-image: url("/img/cv-particles-bg.jpg");
	background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity:.5;
`;
const CvWrap = styled.div`
	padding-top: 300px;
	position:relative;
    margin: 0 auto;
    margin-top:-65px;
    max-width: 1100px;
    padding-left:15px;
    padding-right:15px;
    padding-bottom: 30px;
`;

const Avatar = styled.img`
	border-radius:50%;
	height:130px;
	position:relative;
	z-index:150;
`;

const Name = styled.h1`
    font-size: 42px;
    font-weight: 100;
    line-height: 44px;
    color: #a7a7a7;
`;

const Job = styled.h2`
    margin: 15px 0 0 0;
    font-size: 16px;
    font-weight: 400;
    color: #a7a7a7;
`;

const contactIconStyle = {
	width: 35,
	height: 35,
	lineHeight: "30px",
	fontSize: 14,
	margin: 10,
	boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.2)"
};

const InfoItemList = styled.div`
	float:left;
	width: 40%;
	@media (max-width: 900px){
		width: 100%;
	}
`;

const InfoItemWrap = styled.div`
	height:50px;
	line-height:50px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.2);
    font-size: 14px;
    color: #363636;
    position:relative;
    & .infoText{
        display:inline-block;
        width:100%;
        padding-left:80px;
        position:absolute;
        top:0;
        left:0;
    }
    
     @media (max-width: 900px){
		& .infoText{
			padding-left:120px;
		}
	 }
	 
	 @media (max-width: 450px){
		& .infoText{
			padding-left:80px;
		}
	 }
`;
const SelectionTitle = styled.div`
	text-align:center;
	margin-top: 50px;
	margin-bottom: 20px;
	font-size:30px;
	color:#bdbdbd;
`;
const SelfIntro = styled.div`
	width: 60%;
	float:left;
	padding-left:15px;
	
	@media (max-width: 900px){
		margin-top: 10px;
		width: 100%;
		padding-left:0;
	}
	
	& p{
		font-size:12px;
		line-height:22px;
		letter-spacing:1px;
		margin-bottom:10px;
	}
`;

const SkillSelectionProfession = styled.div`
	width: 50%;
	padding-right: 20px;
	float:left;
	position:relative;
	@media (max-width: 900px){
		width:100%;
		padding-right:0;
	}
`;

const SkillSelectionPersonal = styled.div`
	width: 50%;
	padding-left: 20px;
	float:left;
	position:relative;
	@media (max-width: 900px){
		width:100%;
		padding-left:0;
		margin-top: 50px;
	}
`;

const SkillTypeIcon = styled.div`
	position:absolute;
	text-align:center;
	top: -25px;
	width:100%;
	z-index:10;
	left:0;
	& h3 {
		font-size:16px;
	    position: relative;
	    top: 10px;
	    font-size: 20px;
	}
	& span{
		padding:10px;
		font-size:28px;
		border-radius:50%;
		box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
		background-color:#108ee9;
		color:#fff;
	}
`;
const HighlightAbility = styled.span`
	font-weight: bold;
	padding: 2px 5px;
	border-top-left-radius: 4px;
    border-top-right-radius: 4px;
	background-color: rgba(238, 238, 238, .6);
	border-bottom: 1px solid #108ee9;
`;
const SkillItem = styled.div`
	padding: 10px 0;
`;
const SkillName = styled.span`
	font-size:18px;
	color:#333;
    position: relative;
    bottom: -4px;
    margin-right:5px;
`;
const SkillScore = styled.span`
	text-align:right;
	font-size:14px;
    position: relative;
    bottom: -2px;
`;
const TimeLineContainer = styled.div`
	position:relative;
	min-height:100px;
	padding-top:60px;
	& .timelineIcon{
		position:absolute;
		top: -25px;
		z-index:10;
		left:50%;
		transform:translate(-50%,0);
		padding:10px;
		font-size:28px;
		border-radius:50%;
		box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
		background-color:#108ee9;
		color:#fff;
		
		@media (max-width: 900px){
	        left:4%;
	    }
	}
	&:before{
	    content: '';
	    position: absolute;
	    top: 0;
	    left: 50%;
	    width: 2px;
	    height: 100%;
	    transform: translate(-1px,0);
	    background: #108ee9;
	    
	    @media (max-width: 900px){
	        left:4%;
	    }
	}
`;

const TimeLineSelection = styled.div`
	width: 46%;
	position:relative;
	margin-bottom:25px;
	${ props => props.floatToRight ? "margin-left:54%" : ""};
	&:before{
		position: absolute;
		content: '';
		width:8.5%;
		border:1px solid #108ee9;
		${ props => props.floatToRight ? "left" : "right"}:-8.5%;
		top:20px;
	}
	
	
	@media (max-width: 900px){
		width:92%;
		left:8%;
		margin-left:0;
		&:before{
			position: absolute;
			content: '';
			width:4.2%;
			border:1px solid #108ee9;
			left:-4.2%;
			top:20px;
		}
	}
	
`;

const TimeLineSelectionName = styled.h2`
	margin-bottom: 8px;
`;

const TimeLineSelectionSubTitle = styled.span`
	background-color:#efefef;
	padding:4px;
	margin-bottom: 5px;
	display:inline-block;
`;


const TimeLineSelectionDescription = styled.p`
	line-height:22px;
	font-size:12px;
`;

const ProjectIntroduce = styled.div`
	float:left;
	width:33.333%;
	margin-bottom: 20px;
	padding: 0 5px;
	@media (max-width: 900px){
		width:50%;
	}
	
	@media (max-width: 500px){
		width:100%;
	}
	
	@media print{
		display:block !important;
		transform:scale(1) !important;
	}
`;

const ProjectName = styled.h2`
	font-weight:normal;
	margin-bottom:8px;
`;
const ProjectType = styled.span`
	background-color:#efefef;
	padding:4px;
	margin-bottom: 5px;
	display:inline-block;
`;

const ProjectContent = styled.p`
    line-height: 22px;
    font-size: 12px;
`;

const particleConfig = {
	"particles": {
		"number": {
			"value": 50,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 140,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
};
class ProjectBlock extends React.Component{
	static defaultProps = {
		show:true
	};
	render(){
		const { show, children } = this.props;
		return <Motion defaultStyle={ {scale:1} } style={ {scale:spring( show  ? 1 : 0, presets.stiff)} }>
			{ ({scale}) => <ProjectIntroduce
				style={ {transform:`scale(${scale})`, display:scale <= .2 ? "none" : "block"} }>
				{ children }
			</ProjectIntroduce>
			}
			
		</Motion>
	}
}
export default class CV extends React.Component {
	state = {
		showType:"all"
	};
	componentDidMount() {
		particlesJS("particles-js", particleConfig)
	}
	
	setShowType =(type)=>{
		this.setState({
			showType: type
		})
	};
	render() {
		const { showType } = this.state;
		return <div style={{backgroundColor: '#eee'}}>
			<CVHeader>
				<ParticleContainer id="particles-js"/>
			</CVHeader>
			<CvWrap>
				<div style={{textAlign: 'center'}}>
					<Avatar src="/img/cv-photo.jpg"/>
					<Name>张&nbsp;&nbsp;&nbsp;&nbsp;庆</Name>
					<Job>前端开发 Front-end Developer</Job>
					
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
				<SelectionTitle >Introduce 个人介绍</SelectionTitle>
				<Card style={{width: "100%"}}>
					<div className="clearfix">
						<InfoItemList>
							<InfoItemWrap>
								<Tag color="#108ee9">生日:</Tag>
								<span className="infoText">1991-09-07</span>
							</InfoItemWrap>
							
							<InfoItemWrap>
								<Tag color="#108ee9">职业:</Tag>
								<span className="infoText">资深前端开发工程师</span>
							</InfoItemWrap>
							
							<InfoItemWrap>
								<Tag color="#108ee9">住址:</Tag>
								<span className="infoText">江苏/苏州/姑苏区</span>
							
							</InfoItemWrap>
							
							<InfoItemWrap>
								<Tag color="#108ee9">国籍:</Tag>
								<span className="infoText">中国</span>
							
							</InfoItemWrap>
							
							<InfoItemWrap>
								<Tag color="#108ee9">电话:</Tag>
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
						<SelfIntro>
							
							<p>
								前端工程师，3年前端工作经验, 主要从事企业级web页面开发,能够独立架构和开发中小型高质量 高可维护的web前端项目。
							</p>
							<p>
								JavaScript 铁杆粉,精通原生js开发, 平时喜欢研究 前端 的最前沿技术,
								熟悉 react 和 相关构建工具的使用,追求代码的 Dry 哲学, 崇尚敏捷开发, 争取再最短时间内 高质量的完成任务，
								不断优化现有技术栈，力求最优解。
							</p>
							<p>
								善于分析现有项目的优缺点， 解决各类前端开发中出现的问题,
								给出合理可行的解决方案， 持续优化项目。
							</p>
							<p>
								研究或者使用过大量 <HighlightAbility>jquery</HighlightAbility> 插件,
								数据可视化 <HighlightAbility>d3.js</HighlightAbility> 图表库,
								以及 <HighlightAbility>react</HighlightAbility>  相关社区类库。
								有足够能力根据业务需求开发这3大类组件。<br/>
								熟练合理的应用 div+css 布局响应式页面, 了解相关 css 技术。 <br/>
								熟悉 <HighlightAbility>gulp</HighlightAbility>, browserify, <HighlightAbility>webpack</HighlightAbility> 前端构建工具的使用。 <br/>
								精通原生js开发, 平时大量应用 javascript 高级语法 <HighlightAbility>es6</HighlightAbility>, <HighlightAbility>es7</HighlightAbility>, 正逐步减少工具类库的使用。 <br/>
								了解 nodejs后端开发, 会使用 nodejs(express, koa) 开发小型web后台。<br/>
								简单了解 chrome plugin 开发, electron 桌面app 开发。<br/>
							</p>
						</SelfIntro>
					</div>
				</Card>
				
				<SelectionTitle >Skills 技能</SelectionTitle>
				<div className="clearfix">
					<SkillSelectionProfession>
						
						<Card style={ {width:"100%"} }>
							<SkillTypeIcon>
								<span className="fa fa-code"/>
								<h3>职业技能</h3>
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
								<h3>个人素质</h3>
							</SkillTypeIcon>
							
							<SkillItem style={ {marginTop:40} }>
								<SkillName>交流</SkillName>
								<Progress percent={70} status="active"/>
							</SkillItem>
							<SkillItem>
								<SkillName>协作/Team Work</SkillName>
								<Progress percent={70} status="active"/>
							</SkillItem>
							
							<SkillItem>
								<SkillName>创造力</SkillName>
								<Progress percent={85} status="active"/>
							</SkillItem>
							
							<SkillItem>
								<SkillName>英语</SkillName>
								<SkillScore>
									<Tag color="blue">CET-4</Tag>
									<Tag color="blue">IELTS</Tag>
								</SkillScore>
								<Progress percent={70} status="active"/>
							</SkillItem>
							
							<SkillItem>
								<SkillName>毅力</SkillName>
								<Progress percent={80} status="active"/>
							</SkillItem>
							
							<SkillItem>
								<SkillName>学习能力</SkillName>
								<Progress percent={80} status="active"/>
							</SkillItem>
							
							<SkillItem>
								<SkillName>领导力</SkillName>
								<Progress percent={20} status="active"/>
							</SkillItem>
						</Card>
					</SkillSelectionPersonal>
				</div>
				
				<SelectionTitle style={ {marginBottom:35} }>Experience 工作经验</SelectionTitle>
				<TimeLineContainer>
					<span className="fa fa-history timelineIcon"/>
					<TimeLineSelection>
						<Card style={ {width:"100%"} }>
							<TimeLineSelectionName>
								苏州优圣美智能信息有限公司
							</TimeLineSelectionName>
							<TimeLineSelectionSubTitle>前端开发工程师</TimeLineSelectionSubTitle><br/>
							<Tag color="blue">2015 - 现在</Tag>
							<TimeLineSelectionDescription>
								担任前端工程师, 负责MLP(日志分析系统)前端页面架构与报表模块的开发和维护,
								项目为单页面大型应用,包含大量复杂前端逻辑, 大量使用 jquery, 使用 d3开发订制图表。
								
							</TimeLineSelectionDescription>
							
						</Card>
					</TimeLineSelection>
				</TimeLineContainer>
				
				<SelectionTitle >Projects 项目</SelectionTitle>
				<div>
					<div style={ {textAlign:"center", marginBottom: 30} }>
						<Button.Group>
							<Button
								size={ "large" }
								type={  showType === "all" ? "primary" : "" }
								onClick={ ()=>this.setShowType("all") }
							>
								所有
							</Button>
							<Button
								size={ "large" }
								type={ showType === "team" ? "primary" : "" }
								onClick={ ()=>this.setShowType("team") }
							>
								团队
							</Button>
							<Button
								size={ "large" }
								type={ showType === "person" ? "primary" : "" }
								onClick={ ()=>this.setShowType("person") }
							>
								个人
							</Button>
							
						</Button.Group>
					</div>
					<div className="clearfix" style={ {margin:"0 -5px"} }>
						<ProjectBlock show={ showType === "all" || showType === "team" }>
							<Card style={ {width:"100%",height:"100%"} }>
								<ProjectName>Machine Learning Processor</ProjectName>
								<ProjectType>团队</ProjectType>
								<ProjectContent>
									MLP为一个大型分布式日志分析系统, 主要功能帮助客户分析日志，主动报警和历史数据可视化。
								</ProjectContent>
								<ProjectContent>
									我在其中主要负责项目报表页面的开发和维护, 和前端页面的构建。
									用户可以根据报表页面中通过拖拉,配置图表的方式进行数据可视化展示, 免去编写代码的痛苦。
									前端项目完全由 javascript驱动的单页面应用,
									通过iframe实现各个页面模块的跳转, 在顶层页面设置公用组件，达到同步状态的目的。
								</ProjectContent>
							</Card>
						</ProjectBlock>
						<ProjectBlock show={ showType === "all" || showType === "team" }>
							<Card style={ {width:"100%",height:"100%"} }>
								<ProjectName>找个律师</ProjectName>
								<ProjectType>团队</ProjectType>
								<ProjectContent>
									一个律师相关App简单coming soon纯静态页面,
									应用到了gulp打包, less编译css, 和一个jquery 插件 fullpage.js。
									项目托管在github中。
								</ProjectContent>
								<ProjectContent>
									<a href="https://github.com/JennerChen/lawyer" target="_blank">源码</a>
								</ProjectContent>
							</Card>
						</ProjectBlock>
						<ProjectBlock show={ showType === "all" || showType === "person" }>
							<Card style={ {width:"100%",height:"100%"} }>
								<ProjectName>个人云盘网站</ProjectName>
								<ProjectType>个人</ProjectType>
								<ProjectContent>
									当前为文件上传和下载服务器, 服务器部署在阿里云中,依托阿里OSS对象存储文件, 保存或者分享个人常用文件。
									此项目用于综合训练平时研究的最新技术, 故所有技术栈全部尽量使用最前沿的。
								</ProjectContent>
								<ProjectContent>
									项目当前版本: react +  redux + material design + antd 组合开发
								</ProjectContent>
								<ProjectContent>
									项目正在开发 v2 版本, 将用 mobx + react 以替换 react + redux;并且大幅度优化 nodeJs 后端。当前简历也是 v2版本的一部分。
								</ProjectContent>
								<ProjectContent>
									<a href="https://github.com/JennerChen/simple-personal-cloudyService/tree/master"
									   target="_blank">
										当前版本源码</a><br/>
									<a href="https://github.com/JennerChen/simple-personal-cloudyService/tree/koa-mobx-v2" target="_blank">v2版本源码</a>
								</ProjectContent>
							</Card>
						</ProjectBlock>
						
						<ProjectBlock show={ showType === "all" || showType === "person" }>
							<Card style={ {width:"100%",height:"100%"} }>
								<ProjectName>json-html-viewer</ProjectName>
								<ProjectType>个人</ProjectType>
								<ProjectContent>
									react显示json数据的插件, 将json数据结构解析成html格式。支持json代码高亮, 折叠。
								</ProjectContent>
								<ProjectContent>
									<a href="https://github.com/JennerChen/json-html-viewer"
									   target="_blank">
										源码</a><br/>
									<a href="https://npm.taobao.org/package/json-html-viewer"
									   target="_blank">
										cnpm</a>
								</ProjectContent>
							</Card>
						</ProjectBlock>
						
						<ProjectBlock show={ showType === "all" || showType === "person" }>
							<Card style={ {width:"100%",height:"100%"} }>
								<ProjectName>redmineAutoFill</ProjectName>
								<ProjectType>个人</ProjectType>
								<ProjectContent>
									项目管理工具 redmine 谷歌插件, 公司项目管理包含固定格式, 每次填写需要重复相同的动作, 自己开发了一个简单谷歌插件,
									自动填写表单，省去每次重复操作。
								</ProjectContent>
								<ProjectContent>
									<a href="https://github.com/JennerChen/redmineAutoFill"
									   target="_blank">
										源码</a><br/>
								</ProjectContent>
							</Card>
						</ProjectBlock>
					</div>
					
				</div>
				
				
				<SelectionTitle style={ {marginBottom:35} }>Education 教育</SelectionTitle>
				
				<TimeLineContainer>
					<span className="fa fa-certificate timelineIcon"/>
					<TimeLineSelection>
						<Card style={ {width:"100%"} }>
							<TimeLineSelectionName>
								爱尔兰都柏林理工学院
							</TimeLineSelectionName>
							<TimeLineSelectionSubTitle>研究生-Advance Software Development</TimeLineSelectionSubTitle><br/>
							<Tag color="blue">2014 - 2015</Tag>
							<TimeLineSelectionDescription>
								攻读研究生学位, 学习 软件设计和开发的相关课程,
								例如 敏捷开发(agile development), 高级数据库(advance database) 编程设计模式(programming paradigm)
								以及3门 编程语言 haskell, lua, prolog;
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
								爱尔兰沃特福德理工学院
							</TimeLineSelectionName>
							<TimeLineSelectionSubTitle>本科(第四年)-Software Development </TimeLineSelectionSubTitle><br/>
							<Tag color="blue">2013 - 2014</Tag>
							<TimeLineSelectionDescription>
								攻读本科第四年, 主要学习软件开发, 课程有 web development, web security, android development, java
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
								南京信息工程大学
							</TimeLineSelectionName>
							<TimeLineSelectionSubTitle>本科-软件工程</TimeLineSelectionSubTitle><br/>
							<Tag color="blue">2010 - 2013</Tag>
							<TimeLineSelectionDescription>
								学习软件开发, 主要课程包含 java, 软件工程, 计算机网络 ,数据结构等计算机理论知识。
							</TimeLineSelectionDescription>
							<img
								width={ 80 }
								style={ {position:"absolute",top:25,right:25} }
								src="http://m.c.lnkd.licdn.com/mpr/mpr/shrinknp_100_100/p/3/005/0ad/16d/17e00a5.png"/>
						</Card>
					</TimeLineSelection>
				</TimeLineContainer>
			</CvWrap>
		</div>
	}
}