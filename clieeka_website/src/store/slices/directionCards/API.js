import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDirectionCardData = createAsyncThunk("directionCards/fetchDirectionCardData", async () => {
    const res = await fetch("http://localhost:4005/direction")
    const resJson = res.json()
    return (resJson)
})