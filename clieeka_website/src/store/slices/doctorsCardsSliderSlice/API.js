import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDoctorsCardsData = createAsyncThunk("doctorsCardsSlice/fetchDoctorsCardsData", async () => {
    const res = await fetch("http://localhost:4005/specialistsDoctors")
    const resJson = res.json()
    return resJson
})