import React from 'react';
export default class CV extends React.Component{
	render(){
		return <div id="cv" className="instaFade">
			<link href="/css/cv.min.css" rel="stylesheet"/>
			<div className="mainDetails">
				<div id="headshot" className="quickFade">
					<img src="/img/avatar.jpg" alt="张庆" style={ { maxWidth:"100px"} }/>
				</div>
				
				<div id="name">
					<h1 className="quickFade delayTwo">张庆</h1>
					<h2 className="quickFade delayThree">前端工程师</h2>
				</div>
				
				<div id="contactDetails" className="quickFade delayFour">
					<ul>
						<li><i className="fa fa-location-arrow fa-fw fa-lg"/>: 中国/江苏/苏州</li>
						<li><i className='fa fa-mobile-phone fa-fw fa-lg'/>: 18112525542(工作)</li>
						<li><i className='fa fa-envelope-o fa-fw fa-lg'/>: <a href="mailto:zhangqing332@live.com" target="_blank">   zhangqing332@live.com</a></li>
						<li><i className='fa fa-github fa-fw fa-lg'/>: <a href="http://github.com/JennerChen" target="_blank"> github.com/JennerChen</a></li>
						<li><i className='fa fa-linkedin-square fa-fw fa-lg'/>: <a href="https://cn.linkedin.com/in/zhangqing332" target="_blank">cn.linkedin.com/in/zhangqing332</a></li>
					</ul>
				</div>
				<div className="clear"/>
			</div>
			<div id="mainArea" className="quickFade delayFive">
				<section>
					<article>
						<div className="sectionTitle">
							<h1>个人介绍</h1>
						</div>
						
						<div className="sectionContent">
							<p>前端工程师, 主要从事企业级web页面开发, 热爱新事物, 新技术, 追求卓越。<br/>
								JavaScript 铁杆粉, 能用程序解决的事情, 都用编码搞定。 平时喜欢研究 前端 的最前沿技术, 熟悉 react 和 相关构建工具的使用, 追求代码的 Dry 哲学, 不断优化现有技术栈，力求最优解。 深刻理解javascript, 可以根据公司或者客户逻辑构建前端逻辑, 选择技术栈, 完全有能力与经验独立开发中小型web app。
							</p>
						</div>
					</article>
					<div className="clear"/>
				</section>
				
				
				<section>
					<div className="sectionTitle">
						<h1>工作经验</h1>
					</div>
					
					<div className="sectionContent">
						<article>
							<h2>苏州优圣美智能信息有限公司</h2>
							<p className="subDetails">2015-07 - 目前</p>
							<p>担任前端工程师, 负责企业级前端页面的设计与报表模块的开发和维护, 大量复杂逻辑的javascript开发。
							</p>
						</article>
					</div>
					<div className="clear"/>
				</section>
				
				
				<section>
					<div className="sectionTitle">
						<h1>我的技能</h1>
					</div>
					
					<div className="sectionContent">
						<ul className="keySkills">
							<li>精通 javascript</li>
							<li>熟悉 css/html/svg/jquery </li>
							<li>IDE sublime/webstorm</li>
							<li>知道 nodejs</li>
							<li>会使用 webpack, gulp 等构建工具</li>
							<li>了解 eclipse</li>
							<li>知道 react</li>
							<li>了解 es6</li>
						</ul>
					</div>
					<div className="clear"/>
				</section>
				
				<section>
					<div className="sectionTitle">
						<h1>项目经验</h1>
					</div>
					
					<div className="sectionContent">
						<article>
							<h2>MLP</h2>
							<p className="subDetails">2015-07 - 目前</p>
							<p>MLP是一个长期维护的分布式系统, 主要功能是帮助客户分析采集日志信息, 通过大数据分析, 索引, 聚合等一系列复杂的操作, 帮助客户发现,归纳数据, 获取其中的价值, 甚至预测将来的趋势,发出警报。<br/>
								开发团队约30多人(约5名数据采集,2名数据分析,3位后台c++同学,11名前端与15名测试组成),
								主要模块为: 数据采集(Data Collection), 数据处理(Data Processing), 数据搜索(Data Searching) 数据可视化(Data Visualization)。<br/>
								数据采集: 需要应对不同客户不同数据来源的情况。 例如, 日志数据来自数据库, 需要编写不同的数据库接口查出目标数据,将其保存的公用数据池中(silo),整个过程可以在DV模块的parser页面中配置。 <br/>
								<b>数据分析</b>：根据客户分析数据，寻找有意义的数据, 也会参与设计最终报表(report)。<br/>
								<b>数据处理</b>：数据采集后, 定义silo池中的数据如何解析, 索引(默认根据时间聚合), 以及根据当前silo池中数据聚合的结果, 通过大数据+机器学习算法, 预测将来的趋势, 发出警报。(由CTO<a href='https://www.linkedin.com/in/sapthonair/'>Nair博士</a>研发,为项目核心算法)<br/>
								<b>数据搜索</b>: 当前数据搜索使用 Elastic Search 引擎, 查询silo池中的未经处理的数据。例如用户在报表页面发现某段时间出现异常, 不需要自己翻阅原始数据, 只要通过报表的回溯(traceback)功能即可查询源数据, 帮助客户快速定位问题。 <br/>
								<b>数据可视化</b>：主要分为2部分, 为面向实施工程师的数据流，监控器, 解析器(parser)页面, 和为面向设计师和客户开发的报表, 搜索, 报警页面。<br/>
								数据流模块主要通过拖拽各种预定义模板,处理器的形式，设置整个数据处理的方式, 生成model, table供报表页面查询。例如, 配置将数据处理聚合的时间设置为1秒, 以求获得更精确的结果。又如设置数据处理结果存入FRDB(Fast Read Database)的类型。
								监控器页面负责监控各个服务器端计算资源的使用情况，了解整个系统的运行情况。
								解析器页面通过拖拽的形式代替用户手写正则, 快速解析处理原始数据。
								搜索页面后台基于Elastic Search, 为用户提供可视化查询原始数据, 帮助其快速定位问题。
								报表页面客户通过从数据流页面中事先定义好的model,table中拖拽字段即可生成可视化数据图表。图表可以配置触发器, 回溯(traceback)等功能, 生成Dashboard, 用于创建月表, 年表,或者可视化大屏实时监控。<br/>
								
								在该系统中我主要负责页面部分, 设计web app的结构, 报表页面的开发, 以及为客户订制各种专属页面。
								前端页面是一个J2EE的项目, JAVA端主要负责发送数据, 整个页面部分负责呈现数据。
								<br/>
									开发中主要遇到的问题:<br/>
									·页面需要长期维护, 需要设计一个scalable的前端页面框架。<br/>
									·页面中存在复杂逻辑, 对javascript代码要求极高。<br/>
									·与其他同事共同开发同一个模块, 使用browserify处理各个文件的关系, 以最大程度减少代码冲突。<br/>
									·为客户订制高度可配的图表, 整个图表基于d3.js编写，需要了解大量svg相关知识。<br/>
									·需要注意页面内存性能问题, 报表页面会应用于长时间不间断运行中, 故要十分小心处理数据,保证长时间运行页面不崩溃,内存不泄露。 <br/>
							</p>
						</article>
						<article>
							<h2>找个律师</h2>
							<p className="subDetails">2015-02 - 2015-04</p>
							<p>一个律师相关简单coming soon静态页面, 应用到了gulp打包, less编译css, 和一个jquery 插件 fullpage.js。项目<a href='https://github.com/JennerChen/lawyer'>源码</a>托管在github中。
							</p>
						</article>
						<article>
							<h2>个人简易云盘</h2>
							<p className="subDetails">个人项目</p>
							<p>
								文件上传和下载服务器, 服务器部署在阿里云中,依托阿里OSS对象存储文件, 保存或者分享个人常用文件。
								追求所有技术最前沿的spa页面, 功能陆续在完善中, 详见<a href='https://github.com/JennerChen/simple-personal-cloudyService'>项目主页</a>
							</p>
						</article>
						<article>
							<h2>插件开发</h2>
							<p className="subDetails">简易提示</p>
							<p>一个简易消息提示,样式完全自定义的库, 基于jquery-tipsy改装。用于在项目中快速添加提示消息,
								<a href='https://github.com/JennerChen/mlpTooltip'>项目</a>托管于github
							</p>
							<p className="subDetails">geraltTable(表格生成)</p>
							<p>自定义表格生成js插件,简便快速,支持分页,排序等功能 用于替代代码冗余的DataTable等表格插件。
								<a href='https://github.com/JennerChen/jspluginsPersonal'>项目</a>托管于github
							</p>
							<p className="subDetails">svg-accordion(svg的手风琴)</p>
							<p>自定义手风琴svg插件, 在svg中实现手风琴折叠页面内容。
								<a href='https://github.com/JennerChen/jspluginsPersonal'>项目</a>托管于github
							</p>
							<p className="subDetails">redmineAutoFill</p>
							<p>redmine项目管理工具自动填写表单的谷歌插件,解决当回复bug时统一回复格式的问题, 例如, 当回复信息时, 自动填写回复日期, 回复人等固定信息, 加速办公。 此插件可以进一步修改为任意页面自动填写工具, 例如账号登录等。
								<a href='https://github.com/JennerChen/redmineAutoFill'>项目</a>托管于github
							</p>
						</article>
						
					</div>
					<div className="clear"/>
				</section>
				<section>
					<div className="sectionTitle">
						<h1>教育程度</h1>
					</div>
					
					<div className="sectionContent">
						<article>
							<h2>爱尔兰都柏林理工学院</h2>
							<p className="subDetails">研究生 -- 高级软件开发(2014-2015)</p>
							<p>主要学习 软件开发的相关课程, 例如 敏捷开发(agile development), 高级数据库(advance database) 编程设计模式(programming paradigm) 等</p>
						</article>
						<article>
							<h2>爱尔兰沃特福德理工学院</h2>
							<p className="subDetails">本科 -- 软件工程(2013-2014)</p>
						</article>
						<article>
							<h2>南京信息工程大学</h2>
							<p className="subDetails">本科 -- 软件工程(2010-2013)</p>
						</article>
					</div>
					<div className="clear"/>
				</section>
			
			</div>
		</div>
	}
}