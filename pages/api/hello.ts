import { NextApiRequest, NextApiResponse } from "next"

export default function salendpoint(req:NextApiRequest, res:NextApiResponse){
    res.status(200).json({text:'Hello'})
}