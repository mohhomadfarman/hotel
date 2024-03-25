import { getUserFromToken } from '@/service/auth';
import Link from 'next/link'
import React from 'react'

function Header() {
  const user = getUserFromToken();
  
  return (
    <header>
   <nav className="navbar navbar-expand-lg bg-body-white border-bottom border-color-gold py-3">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className=" navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav gap-4">
              <Link className="nav-link active" aria-current="page" href={user?.role === "hotel" ? "/dashboard/my-hotels" :"/auth/signup"}>List Your Hotel</Link>
              <Link className="nav-link" href="#">Publish News</Link>
              {user?.role === "hotel" ? 
              <Link className="nav-link" href="/dashboard">Dashboard</Link> :
              <Link className="nav-link" href="/auth/signin">Login</Link>
            }
             

              <div className="find-hotel">
                <Link href="#">Find a Hotel</Link>
            </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-white py-3">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="318px" height="auto" viewBox="0 0 1090.000000 136.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)" fill="#B6191F"
    stroke="none">
    <path d="M0 680 l0 -680 305 0 305 0 0 85 0 85 -220 0 -220 0 0 595 0 595 -85
0 -85 0 0 -680z" />
    <path d="M650 883 c0 -526 3 -555 61 -662 56 -105 133 -170 241 -202 99 -30
248 -24 330 13 106 49 179 135 221 261 20 59 22 85 25 565 l3 502 -85 0 -85 0
-3 -492 c-3 -444 -5 -498 -21 -539 -26 -67 -79 -124 -135 -146 -55 -21 -148
-23 -206 -4 -49 17 -111 73 -137 124 -44 85 -49 147 -49 615 l0 442 -80 0 -80
0 0 -477z" />
    <path d="M1610 1355 c0 -3 83 -154 185 -335 102 -181 185 -335 185 -341 0 -6
-82 -157 -182 -337 -101 -179 -185 -330 -186 -334 -2 -5 40 -7 94 -6 l99 3
135 242 c74 133 137 244 140 246 3 3 68 -107 144 -244 l140 -249 93 0 c51 0
93 4 93 9 0 5 -83 158 -185 340 l-185 330 185 330 c102 181 185 334 185 340 0
7 -33 11 -92 11 l-93 0 -139 -251 c-76 -138 -142 -247 -146 -242 -5 4 -69 116
-143 248 l-134 240 -97 3 c-53 1 -96 0 -96 -3z" />
    <path d="M2640 882 c0 -526 1 -539 62 -660 40 -81 127 -162 205 -193 50 -20
76 -24 183 -24 117 0 129 2 187 29 76 35 154 113 189 190 50 110 54 154 54
664 l0 472 -85 0 -84 0 -3 -497 c-3 -496 -3 -498 -26 -548 -48 -105 -117 -148
-233 -149 -135 0 -220 64 -262 199 -21 68 -22 83 -22 533 l0 462 -82 0 -83 0
0 -478z" />
    <path d="M3660 680 l0 -680 85 0 85 0 0 230 0 230 68 0 c37 0 76 3 88 6 18 5
41 -26 170 -222 82 -125 152 -232 156 -237 6 -10 95 31 139 64 21 16 20 18
-131 243 l-151 228 51 54 c205 217 146 580 -116 712 -83 41 -144 52 -304 52
l-140 0 0 -680z m357 477 c134 -68 191 -229 129 -362 -47 -101 -158 -170 -263
-163 l-48 3 -3 272 c-3 308 -10 285 84 278 29 -2 73 -14 101 -28z" />
    <path d="M4360 1357 c0 -3 88 -161 195 -353 l195 -349 0 -327 0 -328 85 0 85
0 0 330 0 329 179 318 c98 175 186 333 195 351 l17 32 -98 0 -98 -1 -140 -253
-139 -253 -141 251 -141 251 -97 3 c-53 1 -97 1 -97 -1z" />
    <path d="M6070 680 l0 -680 85 0 85 0 0 405 0 405 210 0 210 0 0 -405 0 -405
85 0 85 0 0 680 0 680 -85 0 -85 0 0 -190 0 -190 -210 0 -210 0 0 190 0 190
-85 0 -85 0 0 -680z" />
    <path d="M7532 1349 c-133 -17 -246 -73 -346 -174 -80 -80 -127 -152 -161
-252 -90 -259 -34 -538 147 -728 116 -122 245 -183 408 -192 311 -17 574 195
645 521 25 113 17 273 -19 381 -50 149 -166 296 -288 368 -107 62 -257 92
-386 76z m251 -217 c206 -96 317 -344 262 -581 -56 -236 -284 -403 -497 -363
-368 68 -510 558 -244 840 99 105 190 144 326 139 71 -2 97 -8 153 -35z" />
    <path d="M8190 1275 l0 -85 150 0 150 0 0 -595 0 -595 95 0 95 0 0 595 0 595
155 0 155 0 0 85 0 85 -400 0 -400 0 0 -85z" />
    <path d="M9060 680 l0 -680 305 0 305 0 0 85 0 85 -220 0 -220 0 0 120 0 120
220 0 220 0 0 85 0 85 -220 0 -220 0 0 305 0 305 210 0 210 0 0 85 0 85 -295
0 -295 0 0 -680z" />
    <path d="M9790 680 l0 -680 310 0 310 0 0 85 0 85 -225 0 -225 0 0 595 0 595
-85 0 -85 0 0 -680z" />
    <path d="M10389 1337 c-154 -44 -262 -180 -263 -332 -1 -170 127 -305 377
-399 104 -39 185 -86 210 -120 18 -25 22 -44 22 -102 -1 -62 -5 -77 -29 -113
-16 -23 -58 -65 -92 -93 l-64 -51 23 -31 c13 -17 34 -46 47 -64 13 -17 32 -32
41 -32 31 0 182 153 212 214 25 50 27 65 27 168 0 97 -3 120 -24 163 -41 88
-135 157 -298 219 -202 76 -303 174 -277 270 21 75 111 145 188 146 64 0 114
-23 171 -78 l55 -54 70 38 c39 20 72 38 74 40 8 7 -42 75 -85 114 -71 65 -158
101 -257 106 -49 2 -100 -1 -128 -9z" />
</g>
            </svg>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Luxury Hotels & Resorts</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    News
                </Link>
                
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Hotel News</Link></li>
                  <li><Link className="dropdown-item" href="#">General News</Link></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header