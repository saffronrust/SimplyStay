/* eslint-disable react-hooks/exhaustive-deps */
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where, deleteDoc } from "firebase/firestore";
import { Button } from "antd";

/**
 * This component is used to display the home page.
 * The user can navigate to the search page by clicking on the "Begin Your Search!" button.
 * The user will be shown a welcome message on the home page if they are not logged in.
 * The user will be shown a welcome message with their name on the home page if they are logged in.
 * @returns Home component
 */
function Home() {

    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
        await deleteDoc(doc(db, "results", "result.id"));
      } catch (err) {
        console.error(err);
      }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
        fetchUserName();
      }, [user, loading]);

    return (
        <div className="mainbackground">
            <div className="homeSlogan">
                <Title
                  italic = {true}
                >
                  Your BTO journey starts here {name}
                </Title>
            </div>
            <div className="homeCaption">
                <Title
                  level={3}
                >
                  In Singapore, buying public housing for the first time can be a daunting task for young adults.
                  As such, we have elected to create a convenient and intuitive website for Singaporeans to get easy access to the housing market.
                </Title>
                <Button
                  type="primary"
                  onClick={
                    () => navigate("/search")
                  }
                >
                  Begin Your Search!
                </Button>
            </div>
        </div>
    )
}

export default Home;