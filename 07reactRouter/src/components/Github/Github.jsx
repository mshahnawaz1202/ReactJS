import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch("https://api.github.com/users/mshahnawaz1202")
    //         .then((res) => res.json())
    //         .then((data) => setData(data))
    //         .catch((error) => console.log(error));
    // }, []);


    const data = useLoaderData()
    return (
        <div
            className="
            min-h-screen 
            flex 
            items-center 
            justify-center 
            bg-gradient-to-br 
            from-gray-950 
            via-gray-900 
            to-black
            p-5
        "
        >
            {data ? (
                <div
                    className="
                        w-full 
                        max-w-md
                        bg-gray-900
                        border
                        border-gray-700
                        rounded-3xl
                        shadow-2xl
                        overflow-hidden
                        text-white
                    "
                >
                    {/* Top Banner */}
                    <div
                        className="
                            h-36
                            bg-gradient-to-r
                            from-blue-600
                            via-indigo-600
                            to-purple-700
                        "
                    ></div>

                    {/* Profile Image */}
                    <div
                        className="
                            flex
                            justify-center
                            -mt-16
                        "
                    >
                        <img
                            src={data.avatar_url}
                            alt="Github Profile"
                            className="
                                    w-32
                                    h-32
                                    rounded-full
                                    border-4
                                    border-gray-900
                                    shadow-xl
                                "
                        />
                    </div>

                    <div className="p-6 text-center">
                        <h1
                            className="
                                text-3xl
                                font-bold
                                tracking-wide
                            "
                        >
                            {data.name}
                        </h1>

                        <p
                            className="
                                text-blue-400
                                mt-1
                                text-lg
                            "
                        >
                            @{data.login}
                        </p>

                        <p
                            className="
                                text-gray-400
                                mt-4
                                leading-relaxed
                            "
                        >
                            {data.bio || "Software Developer"}
                        </p>

                        {/* Statistics */}
                        <div
                            className="
                                grid
                                grid-cols-3
                                gap-4
                                mt-8
                                border-y
                                border-gray-700
                                py-5
                            "
                        >
                            <div>
                                <h2 className="text-2xl font-bold">{data.public_repos}</h2>
                                <p className="text-gray-400 text-sm">Repositories</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold">{data.followers}</h2>
                                <p className="text-gray-400 text-sm">Followers</p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold">{data.following}</h2>
                                <p className="text-gray-400 text-sm">Following</p>
                            </div>
                        </div>

                        {/* Details */}
                        <div
                            className="
                                mt-6
                                text-left
                                space-y-3
                                text-gray-300
                            "
                        >
                            <div
                                className="
                                    bg-gray-800
                                    p-3
                                    rounded-xl
                                "
                            >
                                <span className="text-gray-500">Location</span>
                                <p>{data.location || "Not Available"}</p>
                            </div>

                            <div
                                className="
                                    bg-gray-800
                                    p-3
                                    rounded-xl
                                "
                            >
                                <span className="text-gray-500">Company</span>
                                <p>{data.company || "Not Available"}</p>
                            </div>

                            <div
                                className="
                                    bg-gray-800
                                    p-3
                                    rounded-xl
                                "
                            >
                                <span className="text-gray-500">Joined</span>
                                <p>{new Date(data.created_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        {/* Profile Button */}
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                    block
                                    mt-7
                                    bg-gradient-to-r
                                    from-blue-600
                                    to-purple-600
                                    py-3
                                    rounded-xl
                                    font-semibold
                                    hover:opacity-90
                                    transition
                                "
                        >
                            Open GitHub Profile
                        </a>
                    </div>
                </div>
            ) : (
                <div
                    className="
                        text-white
                        text-2xl
                    "
                >
                    Loading Profile...
                </div>
            )}
        </div>
    );
}

export default Github;


export const githubInfoLoader  = async() =>{
    const res = await fetch("https://api.github.com/users/mshahnawaz1202")
    return res.json()

}