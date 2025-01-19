import connect from "../../../../lib/dbConfig";

import User from "../../../../modals/userModal";

import { NextRequest,NextResponse } from "next/server";

import bcryptjs from "bcryptjs"


await connect();

export async function POST(request: NextRequest){

    try {
        const reqBody = await request.json();
        const {username,email,password} = reqBody;

        const findUser = await User.findOne({email});

        if(findUser){
            return NextResponse.json({
                message:"User already exit in DB",
                status:400
            })
        }

        const genSalt = await bcryptjs.genSalt(10);
        const hasPassword = await bcryptjs.hash(password,genSalt);

        const newUser = new User({
            username,
            email,
            password:hasPassword
        });

        const saveUser = await newUser.save();

        return NextResponse.json({message:"user created successfully",data:saveUser},{status:200})
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}
