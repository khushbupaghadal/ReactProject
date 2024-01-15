import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CSS/DashboardCss.css'
import './CSS/mainDashboard.css'
import { faArrowsRotate, faFilter } from '@fortawesome/free-solid-svg-icons';
import ReactApexChart from 'react-apexcharts';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { HOC } from './HOC';
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import CardStatisticsVerticalComponent from './CardStatisticsVerticalComponent/CardStatisticsVerticalComponent'
import { styled } from '@mui/material/styles'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import MuiDivider from '@mui/material/Divider'
import MenuUp from 'mdi-material-ui/MenuUp'
import Avatar from '@mui/material/Avatar'
import Poll from 'mdi-material-ui/Poll'
import LinearProgress from '@mui/material/LinearProgress'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'react-bootstrap';
const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

const Dashboard = () => {
  const [chartState, setChartState] = useState({
    series: [{data: [21, 22, 10, 28, 16, 21, 13, 30]}],
    options: {
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                }
            }
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['John', 'Doe'],
                ['Joe', 'Smith'],
                ['Jake', 'Williams'],
                'Amber',
                ['Peter', 'Brown'],
                ['Mary', 'Evans'],
                ['David', 'Wilson'],
                ['Lily', 'Roberts'],
            ],
            labels: {
                style: {
                    colors: colors,
                    fontSize: '12px'
                }
            }
        }
    }
});
const [chartState2, setChartState2] = useState({
    series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
    }],
    options: {
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                }
            }
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['John', 'Doe'],
                ['Joe', 'Smith'],
                ['Jake', 'Williams'],
                'Amber',
                ['Peter', 'Brown'],
                ['Mary', 'Evans'],
                ['David', 'Wilson'],
                ['Lily', 'Roberts'],
            ],
            labels: {
                style: {
                    colors: colors,
                    fontSize: '12px'
                }
            }
        }
    }
});

const data1 = [
    {
        progress: 75,
        imgHeight: 20,
        title: 'Zipcar',
        color: 'primary',
        amount: '$24,895.65',
        subtitle: 'Vuejs, React & HTML',
        imgSrc: '/images/logo-zipcar.png',
    },
    {
        progress: 50,
        color: 'info',
        imgHeight: 27,
        title: 'Bitbank',
        amount: '$8,650.20',
        subtitle: 'Sketch, Figma & XD',
        imgSrc: '/images/logo-bitbank.png',
    },
    {
        progress: 20,
        imgHeight: 20,
        title: 'Aviato',
        color: 'secondary',
        amount: '$1,245.80',
        subtitle: 'HTML & Angular',
        imgSrc: '/images/logo-aviato.png',
    },
]

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

  const pieOptions = {
    chart: {
        width: 320,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
    ],
}


const depositData = [
    {
        logoWidth: 28,
        logoHeight: 29,
        amount: '+$4,650',
        subtitle: 'Sell UI Kit',
        title: 'Gumroad Account',
        logo: '/images/gumroad.png',
    },
    {
        logoWidth: 38,
        logoHeight: 38,
        amount: '+$92,705',
        title: 'Mastercard',
        subtitle: 'Wallet deposit',
        logo: '/images/mastercard-label.png',
    },
    {
        logoWidth: 20,
        logoHeight: 28,
        amount: '+$957',
        title: 'Stripe Account',
        subtitle: 'iOS Application',
        logo: '/images/stripe.png',
    },
    {
        logoWidth: 34,
        logoHeight: 32,
        amount: '+$6,837',
        title: 'American Bank',
        subtitle: 'Bank Transfer',
        logo: '/images/american-bank.png',
    },
    {
        logoWidth: 33,
        logoHeight: 22,
        amount: '+$446',
        title: 'Bank Account',
        subtitle: 'Wallet deposit',
        logo: '/images/citi-bank.png',
    },
]

const withdrawData = [
    {
        logoWidth: 29,
        logoHeight: 30,
        amount: '-$145',
        title: 'Google Adsense',
        subtitle: 'Paypal deposit',
        logo: '/images/google.png',
    },
    {
        logoWidth: 34,
        logoHeight: 34,
        amount: '-$1870',
        title: 'Github Enterprise',
        logo: '/images/github.png',
        subtitle: 'Security & compliance',
    },
    {
        logoWidth: 30,
        logoHeight: 30,
        amount: '-$450',
        title: 'Upgrade Slack Plan',
        subtitle: 'Debit card deposit',
        logo: '/images/slack.png',
    },
    {
        logoWidth: 30,
        logoHeight: 30,
        amount: '-$540',
        title: 'Digital Ocean',
        subtitle: 'Cloud Hosting',
        logo: '/images/digital-ocean.png',
    },
    {
        logoWidth: 36,
        logoHeight: 21,
        amount: '-$21',
        title: 'AWS Account',
        logo: '/images/aws.png',
        subtitle: 'Choosing a Cloud Platform',
    },
]

const Divider = styled(MuiDivider)(({ theme }) => ({
    margin: theme.spacing(5, 0),
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('md')]: {
        borderRight: 'none',
        margin: theme.spacing(0, 5),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}))
  return (
    <>
        <div className='conta pt-5'>
            <div className="main pt-3">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Analytics Dashboard</h2>
                            <p>Welcome back, Lucy! We've missed you. 👋</p>
                        </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <div className='d-flex'>
                            <FontAwesomeIcon icon={faArrowsRotate} />
                            <FontAwesomeIcon icon={faFilter} />
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-lg-5 box m-2"><p>Visitors</p><h2>24.532</h2><p>+14% Since last week</p></div>
                            <div className="col-lg-5 box m-2"><p>Visitors</p><h2>24.532</h2><p>+14% Since last week</p></div>
                            <div className="col-lg-5 box m-2"><p>Visitors</p><h2>24.532</h2><p>+14% Since last week</p></div>
                            <div className="col-lg-5 box m-2"><p>Visitors</p><h2>24.532</h2><p>+14% Since last week</p></div>
                        </div>

                    </div>
                    <div className="col-lg-7">
                        <div id="chart">
                            <ReactApexChart options={chartState.options} series={chartState.series} type="bar" height={350} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='conta'>
                <div className=' d-flex'>
                    <div className=''>
                            <AreaChart width={850} height={350} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                    </div>
                    <div className=''>
                        <Card className="overview-chart box_shadow">
							<CardHeader
								title=" Overview"
								titleTypographyProps={{
									sx: {
										lineHeight: '2rem !important',
										letterSpacing: '0.15px !important',
									},
								}}
								action={
									<IconButton
										size="small"
										aria-label="settings"
										className="card-more-options"
										sx={{ color: 'text.secondary' }}
									>
										<DotsVertical />
									</IconButton>
								}
							/>
							<CardContent
								sx={{
									'& .apexcharts-xcrosshairs.apexcharts-active':
										{ opacity: 0 },
								}}
							>
								<ReactApexChart
									type="pie"
									width={320}
									options={pieOptions}
									series={[44, 55, 13, 43, 22]}
								/>
								<Button
									className="btn-color mt-2"
									fullWidth
									variant="contained"
								>
									Details
								</Button>
							</CardContent>
						</Card>
                    </div>
                    <div>
                        <Card className="totalEarning box_shadow">
							<CardHeader
								title="Total Earning"
								titleTypographyProps={{
									sx: {
										lineHeight: '1.6 !important',
										letterSpacing: '0.15px !important',
									},
								}}
								action={
									<IconButton
										size="small"
										aria-label="settings"
										className="card-more-options"
										sx={{ color: 'text.secondary' }}
									>
										<DotsVertical />
									</IconButton>
								}
							/>
							<CardContent
								sx={{
									pt: (theme) =>
										`${theme.spacing(2.25)} !important`,
								}}
							>
								<Box
									sx={{
										mb: 1.5,
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<Typography
										variant="h4"
										sx={{
											fontWeight: 600,
											fontSize: '2.125rem !important',
										}}
									>
										$24,895
									</Typography>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											color: 'rgb(86, 202, 0)',
										}}
									>
										<MenuUp
											sx={{
												fontSize: '1.875rem',
												verticalAlign: 'middle',
											}}
										/>
										<Typography
											variant="body2"
											sx={{
												fontWeight: 600,
												color: 'rgb(86, 202, 0)',
											}}
										>
											10%
										</Typography>
									</Box>
								</Box>

								<Typography
									component="p"
									variant="caption"
									sx={{ mb: 10 }}
								>
									Compared to $84,325 last year
								</Typography>

								{data1.map((item, index) => {
									return (
										<Box
											key={item.title}
											sx={{
												display: 'flex',
												alignItems: 'center',
												...(index !== data.length - 1
													? { mb: 8.5 }
													: {}),
											}}
										>
											<Avatar
												variant="rounded"
												sx={{
													mr: 3,
													width: 40,
													height: 40,
													backgroundColor: '#9155fd',
												}}
											>
												<img
													src={item.imgSrc}
													alt={item.title}
													height={item.imgHeight}
												/>
											</Avatar>
											<Box
												sx={{
													width: '100%',
													display: 'flex',
													flexWrap: 'wrap',
													alignItems: 'center',
													justifyContent:
														'space-between',
												}}
											>
												<Box
													sx={{
														marginRight: 2,
														display: 'flex',
														flexDirection: 'column',
													}}
												>
													<Typography
														variant="body2"
														sx={{
															mb: 0.5,
															fontWeight: 600,
															color: 'text.primary',
														}}
													>
														{item.title}
													</Typography>
													<Typography variant="caption">
														{item.subtitle}
													</Typography>
												</Box>

												<Box
													sx={{
														minWidth: 85,
														display: 'flex',
														flexDirection: 'column',
													}}
												>
													<Typography
														variant="body2"
														sx={{
															mb: 2,
															fontWeight: 600,
															color: 'text.primary',
														}}
													>
														{item.amount}
													</Typography>
													<LinearProgress
														color={item.color}
														value={item.progress}
														variant="determinate"
													/>
												</Box>
											</Box>
										</Box>
									)
								})}
							</CardContent>
						</Card>
                    </div>
                </div>
        </div>
        <div>
            {/* <Grid margin={2} width={'34.2%'} item xs={12} md={6} lg={4}>
			    <Grid container spacing={2}>
					<Grid item xs={6}>
						<CardStatisticsVerticalComponent stats="$25.6k" icon={<Poll />} color="success" trendNumber="+42%" title="Total Profit" subtitle="Weekly Profit"/>
					</Grid>
					<Grid item xs={6}>
						<CardStatisticsVerticalComponent stats="$78" title="Refunds" trend="negative" color="primary" trendNumber="-15%" subtitle="Past Month" icon={<CurrencyUsd />} />
					</Grid>
					<Grid item xs={6}>
						<CardStatisticsVerticalComponent
							stats="862"
							trend="negative"
							color="secondary"
							trendNumber="-18%"
							title="New Project"
							subtitle="Yearly Project"
							icon={<BriefcaseVariantOutline />}
						/>
					</Grid>
					<Grid item xs={6}>
						<CardStatisticsVerticalComponent
							stats="15"
							color="warning"
							trend="negative"
							trendNumber="-18%"
							subtitle="Last Week"
							title="Sales Queries"
							icon={<HelpCircleOutline />}
						/>
					</Grid>
				</Grid>
			</Grid> */}
        </div>

        
    </>
  )
}

export default HOC(Dashboard)