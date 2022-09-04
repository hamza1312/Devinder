import React from "react"
import { useToast } from "@chakra-ui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Select } from "@chakra-ui/react";
function register() {
  const [phoneNumber, setPhoneNumber] = React.useState(0);

  
  const [password, setPassword] = React.useState(null);
  const [gender, setGender] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [visibilityState,setVisibilityState] = React.useState(false)
  const [visibilityStateTwo,setVisibilityStateTwo] = React.useState(false)
  const toast = useToast();
  const [confirmPassword, setConfirmPassword] = React.useState(null);
  const verifyPhone = (input) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input);
  };
  const SubmitForm = async (e) => {
  
    e.preventDefault();

    if (
      phoneNumber == 0 ||
      password == null ||
      confirmPassword == null ||
      name == null ||
      gender == null
    ) {
      toast({
        title: "Please Fill All the Inputs.",

        status: "error",
        variant: "left-accent",
        duration: 9000,
        isClosable: true,
      });
    } else if (password != confirmPassword) {
      toast({
        title: "Passwords must match.",

        status: "error",
        variant: "left-accent",
        duration: 9000,
        isClosable: true,
      });
    } else if (!verifyPhone(phoneNumber)) {
      toast({
        title: "Please Enter a Valid Phone Number.",

        status: "error",
        variant: "left-accent",
        duration: 9000,
        isClosable: true,
      });
    } else {
      await fetch("http://localhost:9000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          phonenum: phoneNumber,
          password,
          gender: gender,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code == "ERROR") {
            toast({
              title: data.message,
              status: "error",
              variant: "left-accent",
              duration: 9000,
              isClosable: true,
            });
          } else {
            toast({
              title: data.message,
              status: "success",
              variant: "left-accent",
              duration: 9000,
              isClosable: true,
            });
            setTimeout(() => {
              window.location.href = "/login";
            }, 1000);
          }
        });
    }
  };
  const updateVisibility= ()=>{
    setVisibilityState(!visibilityState);
    console.log(visibilityState);
  }
  const updateVisibilityTwo= ()=>{
    setVisibilityStateTwo(!visibilityStateTwo);
    console.log(visibilityStateTwo);
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 h-fit md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg  h-fit shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-6 py-7">
            <h1 className="text-4xl mb-1 font-bold text-green-600 font-serif">
              Devinder
            </h1>
            <h1 className="text-lg  mb-2 italic font-serif dark:text-green-300 text-green-600 leading-tight tracking-tight md:text-2xl">
              Create your Account
            </h1>
            <form className="space-y-4 md:space-y-6 " onSubmit={SubmitForm}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g John Doe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="e.g (123)456-7890"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <div className=" flex flex-row  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                  <input
                    type={visibilityState ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Your Secure Password"
                    className="bg-transparent outline-none"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  { !visibilityState ?
                  <VisibilityOffIcon className="w-full -ml-5 text-white"  onClick={updateVisibility}/>
                  : 
                  <VisibilityIcon className="w-full -ml-5 text-white"  onClick={updateVisibility}/>
                  }  
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm Password
                </label>
                <div className=" flex flex-row  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                  <input
                    type={visibilityStateTwo ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Your Secure Password"
                    className="bg-transparent outline-none"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  { !visibilityStateTwo ?
                  <VisibilityOffIcon className="w-full -ml-5 text-white"  onClick={updateVisibilityTwo}/>
                  : 
                  <VisibilityIcon className="w-full -ml-5 text-white"  onClick={updateVisibilityTwo}/>
                  }  
                </div>
              </div>
              <Select
                placeholder="Select Your Gender"
                variant={"flushed"}
                className={"dark:text-white text-black"}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>

              <button
                type="submit"
                className="w-full text-white bg-green-600 over:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default register;
