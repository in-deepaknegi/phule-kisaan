import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import User from "@/lib/models/user.model";
import connectDB from "@/lib/mongodb";
import React from "react";

type Params = Promise<{ id: string }>;

const SuccessPage = async ({ searchParams }: { searchParams: Params }) => {
    // connectDB();

    // const user = await User.findOne({id});

    // console.log(user.qrCodeUrl);

    const { id } = await searchParams;
    console.log(id);

    const res = await fetch(`http://localhost:3000/api/register/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    console.log(res);

    const data = res;

    return (
        <>
            <Header />
            <main></main>
            <Footer />
        </>
    );
};

export default SuccessPage;
