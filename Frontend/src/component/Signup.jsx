// import React from 'react'
// import { useForm } from "react-hook-form"

// const Signup = () => {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm()

//     const onSubmit = (data) => console.log(data)

//     return (
//         <>
//             <div className='flex items-center justify-center h-screen ml-[30%]
// '>
//                 <form onSubmit={handleSubmit(onSubmit)} action="" className='border border-white px-6 py-2 rounded-md space-y-3 w-96'>

//                     <h1 className='text-2xl text-center'>Chat <span className='text-green-500 font-semibold'>App</span> </h1>
//                     <h2 className='text-2xl font-bold text-white
//     '>Sign Up</h2>

//                     <label className="input validator">
//                         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                             <g
//                                 strokeLinejoin="round"
//                                 strokeLinecap="round"
//                                 strokeWidth="2.5"
//                                 fill="none"
//                                 stroke="currentColor"
//                             >
//                                 <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                                 <circle cx="12" cy="7" r="4"></circle>
//                             </g>
//                         </svg>
//                         <input
//                             type="text"
//                             {...register("fullname", { required: true })}
//                             placeholder="Username"
//                             pattern="[A-Za-z][A-Za-z0-9\-]*"
//                             minlength="3"
//                             maxlength="30"
//                             title="Only letters, numbers or dash"
//                         />

//                     </label>
//                     {errors.fullname && <span>This field is required</span>}



//                     <label className="input validator">
//                         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                             <g
//                                 strokeLinejoin="round"
//                                 strokeLinecap="round"
//                                 strokeWidth="2.5"
//                                 fill="none"
//                                 stroke="currentColor"
//                             >
//                                 <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//                                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                             </g>
//                         </svg>
//                         <input type="email" placeholder="mail@site.com"
//                             {...register("email", { required: true })} />
//                     </label>
//                     {errors.email && <span>This field is required</span>}


//                     <label className="input validator">
//                         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                             <g
//                                 strokeLinejoin="round"
//                                 strokeLinecap="round"
//                                 strokeWidth="2.5"
//                                 fill="none"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
//                                 ></path>
//                                 <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
//                             </g>
//                         </svg>
//                         <input
//                             type="password"
//                             required
//                             placeholder="Password"
//                             minlength="8"
//                             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                             title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
//                             {...register("password", { required: true })}
//                         />
//                     </label>
//                     {errors.password && <span>This field is required</span>}




//                     <label className="input validator">
//                         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                             <g
//                                 strokeLinejoin="round"
//                                 strokeLinecap="round"
//                                 strokeWidth="2.5"
//                                 fill="none"
//                                 stroke="currentColor"
//                             >
//                                 <path
//                                     d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
//                                 ></path>
//                                 <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
//                             </g>
//                         </svg>
//                         <input
//                             type="password"
//                             required
//                             placeholder="Confirm Password"
//                             minlength="8"
//                             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                             title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
//                             {...register("confirmpassword", { required: true })}
//                         />
//                     </label>
//                     {errors.confirmpassword && <span>This field is required</span>}


//                     <div className='flex justify-between'>
//                         <p>Have an account?<span className='text-blue-500 underline cursor-pointer ml-1
// '>Login</span> </p>
//                         <input type="submit" value="Signup" className='text-white bg-green-500 px-4 py-2  cursor-pointer rounded-2xl' />

//                     </div>


//                 </form>



//             </div>
//         </>


//     )
// }

// export default Signup;






import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

const Signup = () => {
   const [authUser,setAuthUser]=useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit =async (data) => {
        // if (data.password !== data.confirmpassword) {
        //     alert("Passwords do not match!");
        //     return;
        // }
        const userInfo={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
            confirmpassword:data.confirmpassword,

        };

         await axios.post("http://localhost:2000/user/signup", userInfo,{
  withCredentials: true})
        .then((response) => {
          if(response.data){
            alert("SignUp successfully");

          }
          localStorage.setItem("ChatApp", JSON.stringify(response.data));
          setAuthUser(response.data)
        })
        .catch((error) => {
            if(error.response){
                alert("Error: " + error.response?.data?.error || "Something went wrong");

            }
        });
      
    }
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-gray-900">
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="border border-white px-6 py-2 rounded-md space-y-3 w-96"
            >
                <h1 className="text-2xl text-center text-white">
                    Chat <span className="text-green-500 font-semibold">App</span>
                </h1>
                <h2 className="text-2xl font-bold text-white text-center">Sign Up</h2>

                {/* Full Name */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register("fullname", {
                            required: "Username is required",
                            minLength: { value: 3, message: "Minimum 3 characters required" },
                            maxLength: { value: 30, message: "Maximum 30 characters allowed" },
                            pattern: {
                                value: /^[A-Za-z][A-Za-z0-9-]*$/,
                                message: "Only letters, numbers, or dash allowed"
                            }
                        })}
                    />
                </label>
                {errors.fullname && <span className="text-red-500">{errors.fullname.message}</span>}

                {/* Email */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input
                        type="email"
                        placeholder="mail@site.com"
                        {...register("email", { required: "Email is required" })}
                    />
                </label>
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                {/* Password */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Minimum 8 characters required" },
                            pattern: {
                                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                                message: "Must include number, lowercase & uppercase letter"
                            }
                        })}
                    />
                </label>
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                {/* Confirm Password */}
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirmpassword", {
                            required: "Confirm password is required",
                            validate: (value) => value === watch("password") || "Passwords do not match",
                        })}
                    />
                </label>
                {errors.confirmpassword && (
                    <span className="text-red-500">{errors.confirmpassword.message}</span>
                )}

                {/* Submit + Link */}
                <div className="flex justify-between items-center">
                    <p className="text-white">
                        Have an account?
                        <Link to="/login" className="text-blue-500 underline cursor-pointer ml-1">Login</Link>
                    </p>
                    <input
                        type="submit"
                        value="Signup"
                        className="text-white bg-green-500 px-4 py-2 cursor-pointer rounded-2xl"
                    />
                </div>
            </form>
        </div>
    );
};

export default Signup;
