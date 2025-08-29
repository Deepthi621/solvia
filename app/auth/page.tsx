"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen overflow-hidden">
      <div
        id="container"
        className={
          "container bg-gray-800 rounded-lg shadow-2xl relative overflow-hidden w-full max-w-4xl min-h-[550px] " +
          (isSignUp ? " right-panel-active" : "")
        }
      >
        {/* Sign Up Form */}
        <div
          className={
            "form-container sign-up-container absolute top-0 left-0 h-full w-1/2 opacity-0 z-10 transition-all duration-500 " +
            (isSignUp ? " translate-x-full opacity-100 z-[101]" : "")
          }
        >
          <form
            id="signUpForm"
            className="bg-gray-800 flex items-center justify-center flex-col px-12 h-full text-center"
          >
            <h1 className="text-3xl font-bold text-white mb-4">Create Account</h1>
            <div className="social-container mb-4">
              <a href="#" className="text-gray-300 inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-600 hover:bg-gray-600 transition-colors mr-2" aria-label="Google">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.525 12.016c0-.853-.073-1.685-.216-2.49H12.22v4.71h5.79c-.248 1.52-1.003 2.81-2.296 3.656v3.056h3.912c2.288-2.108 3.6-5.242 3.6-8.932z"/><path d="M12.22 22.4c3.246 0 5.952-1.07 7.936-2.9l-3.91-3.055c-1.07.718-2.44 1.14-4.025 1.14-3.09 0-5.71-2.08-6.64-4.88H1.513v3.15C3.475 20.078 7.53 22.4 12.22 22.4z"/><path d="M5.58 14.71c-.22-.67-.34-1.37-.34-2.09s.12-1.42.34-2.09V7.37H1.514C.727 8.95.32 10.63.32 12.4s.406 3.45.994 4.94l4.266-3.63z"/><path d="M12.22 5.4c1.75 0 3.33.606 4.58 1.8l3.47-3.46C18.17 1.95 15.46 0 12.22 0 7.53 0 3.47 2.32 1.51 5.84l4.07 3.15c.93-2.8 3.55-4.88 6.64-4.88z"/></svg>
              </a>
              <a href="#" className="text-gray-300 inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-600 hover:bg-gray-600 transition-colors mr-2" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.83-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.9 3.57-.7-.02-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.14.15-.28 0-.55-.03-.81-.08.55 1.7 2.14 2.94 4.03 2.97-1.47 1.15-3.33 1.84-5.35 1.84-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.56 1.93 7.88 0 12.2-6.54 12.2-12.2 0-.19 0-.37-.01-.56.83-.6 1.56-1.36 2.14-2.23z"/></svg>
              </a>
              <a href="#" className="text-gray-300 inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-600 hover:bg-gray-600 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <span className="text-sm text-gray-400 mb-4">or use your email for registration</span>
            <input type="text" placeholder="Name" id="signUpName" className="bg-gray-700 border-none p-3 my-2 w-full text-white rounded" />
            <input type="email" placeholder="Email" id="signUpEmail" className="bg-gray-700 border-none p-3 my-2 w-full text-white rounded" />
            <input type="password" placeholder="Password" id="signUpPassword" className="bg-gray-700 border-none p-3 my-2 w-full text-white rounded" />
            <button type="submit" className="rounded-full bg-teal-600 text-white text-sm font-bold py-3 px-12 uppercase tracking-wider mt-4">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container absolute top-0 left-0 h-full w-1/2 z-20 transition-all duration-500">
          <form
            id="signInForm"
            className={
              "bg-gray-800 flex items-center justify-center flex-col px-12 h-full text-center transition-all duration-500 " +
              (isSignUp ? " translate-x-full opacity-0" : "")
            }
          >
            <h1 className="text-3xl font-bold text-white mb-4">Sign in</h1>
            <div className="social-container mb-4">
              <a href="#" className="text-gray-300 inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-600 hover:bg-gray-600 transition-colors mr-2" aria-label="Google">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.525 12.016c0-.853-.073-1.685-.216-2.49H12.22v4.71h5.79c-.248 1.52-1.003 2.81-2.296 3.656v3.056h3.912c2.288-2.108 3.6-5.242 3.6-8.932z"/><path d="M12.22 22.4c3.246 0 5.952-1.07 7.936-2.9l-3.91-3.055c-1.07.718-2.44 1.14-4.025 1.14-3.09 0-5.71-2.08-6.64-4.88H1.513v3.15C3.475 20.078 7.53 22.4 12.22 22.4z"/><path d="M5.58 14.71c-.22-.67-.34-1.37-.34-2.09s.12-1.42.34-2.09V7.37H1.514C.727 8.95.32 10.63.32 12.4s.406 3.45.994 4.94l4.266-3.63z"/><path d="M12.22 5.4c1.75 0 3.33.606 4.58 1.8l3.47-3.46C18.17 1.95 15.46 0 12.22 0 7.53 0 3.47 2.32 1.51 5.84l4.07 3.15c.93-2.8 3.55-4.88 6.64-4.88z"/></svg>
              </a>
              <a href="#" className="text-gray-300 inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-600 hover:bg-gray-600 transition-colors mr-2" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.83-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.9 3.57-.7-.02-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.14.15-.28 0-.55-.03-.81-.08.55 1.7 2.14 2.94 4.03 2.97-1.47 1.15-3.33 1.84-5.35 1.84-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.56 1.93 7.88 0 12.2-6.54 12.2-12.2 0-.19 0-.37-.01-.56.83-.6 1.56-1.36 2.14-2.23z"/></svg>
              </a>
              <a href="#" className="text-gray-300 inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-600 hover:bg-gray-600 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            <span className="text-sm text-gray-400 mb-4">or use your account</span>
            <input type="email" placeholder="Email" id="signInEmail" className="bg-gray-700 border-none p-3 my-2 w-full text-white rounded" />
            <input type="password" placeholder="Password" id="signInPassword" className="bg-gray-700 border-none p-3 my-2 w-full text-white rounded" />
            <a href="#" className="text-sm text-gray-400 my-4">Forgot your password?</a>
            <button type="submit" className="rounded-full bg-teal-600 text-white text-sm font-bold py-3 px-12 uppercase tracking-wider">Sign In</button>
          </form>
        </div>

        {/* Overlay Panels */}
        <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-50">
          <div
            className={
              "overlay relative h-full w-[200%] transition-transform duration-500 " +
              (isSignUp ? " -translate-x-1/2" : " -translate-x-full")
            }
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="overlay-video absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover z-[-1] brightness-50"
            >
              <source src="/overlay.mp4" type="video/mp4" />
            </video>

            <div className="overlay-panel overlay-left absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 -translate-x-[20%]">
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-6 text-white">Welcome Back</h2>
                <p className="text-base font-light leading-tight mb-6 text-white">To keep connected with us please login with your personal info</p>
                <button
                  id="signIn"
                  onClick={() => setIsSignUp(false)}
                  className="rounded-full border border-white text-white text-sm font-bold py-3 px-12 uppercase tracking-wider"
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="overlay-panel overlay-right absolute flex items-center justify-center flex-col px-10 text-center top-0 right-0 h-full w-1/2">
              <div className="bg-black/40 backdrop-blur-md p-8 rounded-lg">
                <h1 className="text-3xl font-bold text-white mb-4">Hello, Friend!</h1>
                <p className="text-base font-light leading-tight mb-6 text-white">Enter your personal details and start your journey with us</p>
                <button
                  id="signUp"
                  onClick={() => setIsSignUp(true)}
                  className="rounded-full border border-white text-white text-sm font-bold py-3 px-12 uppercase tracking-wider"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



