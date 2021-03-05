import axios from 'axios'
import React, { useEffect, useState } from 'react';

const instance = axios.create({
    baseURL:'https://reaction-kevin-chawla.herokuapp.com'
})

export default instance;