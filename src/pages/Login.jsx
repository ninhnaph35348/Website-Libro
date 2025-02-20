
const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            <div className="w-96 bg-white shadow-lg rounded-lg">
                <div className="text-center text-3xl font-light py-4">
                    <a href="../index2.html" className="text-gray-700"> <b>Admin</b>LTE </a>
                </div>
                <div className="p-6">
                    <p className="text-center text-gray-600 mb-4">Sign in to start your session</p>
                    <form action="../index3.html" method="post">
                        <div className="mb-4">
                            <div className="flex items-center border rounded-lg overflow-hidden">
                                <input type="email" className="w-full px-4 py-2 border-none focus:outline-none" placeholder="Email" />
                                <span className="px-3 text-gray-500"><i className="bi bi-envelope" /></span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-center border rounded-lg overflow-hidden">
                                <input type="password" className="w-full px-4 py-2 border-none focus:outline-none" placeholder="Password" />
                                <span className="px-3 text-gray-500"><i className="bi bi-lock-fill" /></span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-gray-600 text-sm">Remember Me</label>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Sign In</button>
                        </div>
                    </form>
                    <div className="text-center mb-3">
                        <p className="text-gray-500">- OR -</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                            <i className="bi bi-facebook mr-2" /> Sign in using Facebook
                        </a>
                        <a href="#" className="flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
                            <i className="bi bi-google mr-2" /> Sign in using Google+
                        </a>
                    </div>
                    <div className="text-center mt-4">
                        <a href="forgot-password.html" className="text-blue-500 hover:underline">I forgot my password</a>
                    </div>
                    <div className="text-center mt-2">
                        <a href="register.html" className="text-blue-500 hover:underline">Register a new membership</a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login