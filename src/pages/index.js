import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { Button, Checkbox, FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai'

const login = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.loginDiv}>
                <div className={styles.leftDiv}>
                    <div className={styles.imageDiv}>
                        <Image src={"/images/circleImage.png"} width={130} height={130} alt='circle' /><Image src={"/images/dottedImage.png"} width={130} height={130} alt='circle' />
                    </div>

                </div>
                <div className={styles.rightDiv}>
                    <div style={{ marginBottom: "1rem" }}>
                        <h2>Welcome to</h2>
                        <h1 style={{ marginBottom: "1.5rem" }}>KAINO</h1>
                        <h2>Sign in</h2>
                    </div>
                    <form>
                        <FormControl fullWidth sx={{ my: 1 }} focused>
                            <InputLabel required>Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-username"
                                endAdornment={<InputAdornment position="end"><AiOutlineUser color='#891B55' /></InputAdornment>}
                                label="Username"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ my: 1 }} focused >
                            <InputLabel required>Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                endAdornment={<InputAdornment position="end"><AiOutlineLock color='#891B55' /></InputAdornment>}
                                label="Password"
                            />
                        </FormControl>
                        <div className={styles.requestDiv}>
                            <div><Checkbox />Remember me</div>
                            <div className={styles.access}>Request Access ?</div>
                        </div>
                        <Button fullWidth variant='contained' sx={{ backgroundColor: '#3D5EE1' }}>Login</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login
