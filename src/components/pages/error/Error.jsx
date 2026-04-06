import React from 'react';
import { Link, useRouteError } from 'react-router';

const Error = () => {
    // React Router theke error message ber korar jonno (optional)
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                {/* Error Illustration / Icon */}
                <h1 className="text-9xl font-bold text-gray-300">404</h1>
                
                <div className="absolute -mt-20 ml-12">
                    <span className="text-4xl font-semibold text-gray-800">Oops!</span>
                </div>

                <h2 className="mt-8 text-2xl font-medium text-gray-700">
                    Page Not Found
                </h2>
                
                <p className="mt-4 text-gray-500 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Back to Home Button */}
                <div className="mt-10">
                    <Link
                        to="/"
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>

            {/* Choto Design Element */}
            <div className="mt-16 text-gray-400 text-sm">
                Error Code: <span className="font-mono">{error?.statusText || error?.message || "Not Found"}</span>
            </div>
        </div>
    );
};

export default Error;