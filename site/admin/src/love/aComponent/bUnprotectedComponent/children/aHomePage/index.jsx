import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FinalRouteName from '@/love/gRoute/FinalRouteName'
import brand from '@/love/dFunction/gBrand';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  EnvelopeOpenIcon,
  Link2Icon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  PersonIcon,
  UpdateIcon,
  HomeIcon
} from "@radix-ui/react-icons"
import Image1 from '@/love/hAsset/assets/1.png'
import { Separator } from '@/components/ui/separator';


const HomePageComponent = ({ Redux, ReduxUltimate }) => {
  return (
    Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve &&
    <React.Fragment>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <Badge className="mb-2">{Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.tag}</Badge>
                <h1 className="mb-2 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.title}
                </h1>
                <h1 className="mb-5 text-xl font-normal leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                  {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.subtitle}
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                  {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.description}
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.webLinks?.map((each, index) => (
                    <Button asChild key={index} >
                      <Link to={each?.url} target="_blank" rel="noreferrer" >
                        <UpdateIcon className="mr-2 h-4 w-4" /> {each?.title}
                      </Link>
                    </Button>
                  ))}

                  {ReduxUltimate.state.RequiredObject?.Loading ? null :
                    ReduxUltimate.state.ReceivedObject?.ProfileRetrieve ? (
                      <Button asChild >
                        <Link to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}>
                          <HomeIcon className="mr-2 h-4 w-4" /> Let's Get Started
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild >
                        <Link to={FinalRouteName.AuthRoute.LoginRoute}>
                          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Sign in with Email
                        </Link>
                      </Button>
                    )
                  }
                </div>

                <p className="mt-6 mb-2 font-light lg:mt-8 md:text-lg lg:text-xl text-center">
                  Follow us on:
                </p>
                <div className="flex justify-center space-x-2 sm:flex sm:space-y-0 sm:space-x-4">
                  {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.socialLinks?.map((each, index) => (
                    <Button key={index} variant="ghost" size="icon" asChild >
                      <Link to={each?.url} target="_blank" rel="noreferrer" >
                        {
                          each?.title.toLowerCase() === "instagram" ? <InstagramLogoIcon className="h-4 w-4" /> :
                          each?.title.toLowerCase() === "twitter" ? <TwitterLogoIcon className="h-4 w-4" /> :
                          each?.title.toLowerCase() === "threads" ? <Link2Icon className="h-4 w-4" /> :
                          each?.title.toLowerCase() === "linkedin" ? <LinkedInLogoIcon className="h-4 w-4" /> :
                          each?.title.toLowerCase() === "github" ? <GitHubLogoIcon className="h-4 w-4" /> :
                          <Link2Icon className="h-4 w-4" />
                        }
                      </Link>
                    </Button>
                  ))}
                  {/* <Button variant="ghost" size="icon" asChild >
                    <Link 
                      to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramLogoIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild >
                    <Link 
                      to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterLogoIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild >
                    <Link 
                      to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInLogoIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild >
                    <Link 
                      to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubLogoIcon className="h-4 w-4" />
                    </Link>
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HomePageComponent