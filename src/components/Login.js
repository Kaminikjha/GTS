import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import bgVideo from "../assets/bgvideo1.mp4";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secretKey, setSecretKey] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        let isValid = true;
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        const requestData = { email, password };
        if (isAdmin) {
            requestData.secretKey = secretKey;
        }

        try {
            const response = await axios.post("http://localhost:3001/login", requestData);

            if (response.status === 200) {
                alert("✅ Login Successful");
                window.location.replace("https://www.gtands.com");
            }
        } catch (err) {
            const errorMsg = err.response?.data?.error || "Server Error. Try Again.";
            if (errorMsg.includes("No record found with this email")) {
                setErrorMessage("❌ No record found with this email. Please register!");
            } else {
                setErrorMessage(errorMsg);
            }
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
            <video 
                autoPlay 
                muted 
                loop 
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="w-full max-w-md p-8 rounded-xl border border-white/20 shadow-2xl">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>

                {errorMessage && (
                    <div className="bg-red-500/20 text-red-200 p-3 rounded-md mb-4">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2">Email</label>
                        <input 
                            type="email"
                            className={`w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 focus:outline-none focus:bg-white/30 border ${emailError ? 'border-red-500' : 'border-transparent'}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        {emailError && <p className="text-red-300 text-sm mt-1">{emailError}</p>}
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-white font-semibold mb-2">Password</label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"}
                                className={`w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 focus:outline-none focus:bg-white/30 border ${passwordError ? 'border-red-500' : 'border-transparent'}`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white focus:outline-none"
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible size={20} />
                                ) : (
                                    <AiOutlineEye size={20} />
                                )}
                            </button>
                        </div>
                        {passwordError && <p className="text-red-300 text-sm mt-1">{passwordError}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="flex items-center">
                            <input 
                                type="checkbox"
                                className="w-4 h-4 text-[#f06321] opacity-90 bg-white/20 border-white/30 rounded focus:ring-0"
                                onChange={(e) => setIsAdmin(e.target.checked)}
                            />
                            <span className="ml-2 text-white font-semibold">Login as Admin</span>
                        </label>
                    </div>

                    {isAdmin && (
                        <div className="mb-4">
                            <label className="block text-white font-semibold mb-2">Secret Key</label>
                            <input 
                                type="password"
                                className="w-full p-3 bg-white/20 rounded-md text-white placeholder-white/70 focus:outline-none focus:bg-white/30 border border-transparent"
                                value={secretKey}
                                onChange={(e) => setSecretKey(e.target.value)}
                                placeholder="Enter Secret Key"
                            />
                        </div>
                    )}

                    <button 
                        type="submit"
                        className="w-full p-3 bg-[#f06321] opacity-90 hover:bg-[#f06321]/80 text-white rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="mt-4 text-center text-white">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-[#f06321] opacity-90 hover:text-[#f06321]/80">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;