import React from 'react'
import { Modal } from 'antd'
import styles from '@/styles/adminUserRoles.module.css'
import { TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Button } from '@mui/material'

export default function AddAdminModal({ setIsModal, isModal }) {

    const handleSubmit = () => {
        setIsModal(false)
    }

    return (
        <Modal
            title="Basic Deatils"
            width={'900px'}
            centered
            open={isModal}
            onCancel={() => setIsModal(false)}
            footer={null}
        >
            <form onSubmit={handleSubmit}>
                <div className={styles.modalForm}>
                    <TextField
                        focused
                        required
                        size='small'
                        id="outlined-adornment-first_name"
                        label="First Name"
                        placeholder='First Name'
                        variant="outlined"
                        name='first_name'
                    />
                    <TextField
                        focused
                        required
                        size='small'
                        id="outlined-adornment-last_name"
                        label="Last Name"
                        placeholder='Last Name'
                        variant="outlined"
                        name='last_name'
                    />
                    <TextField
                        focused
                        required
                        size='small'
                        type='email'
                        id="outlined-adornment-email"
                        label="Email"
                        placeholder='Email'
                        variant="outlined"
                        name='email'
                    />
                    <FormControl size='small' focused required>
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Select
                            id="country-role"
                            label="Role"
                            value={'Super Admin'}
                        >
                            <MenuItem value={'Super Admin'}>Super Admin</MenuItem>
                            <MenuItem value={'Finance'}>Finance</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <p style={{ color: '#4C4C4C', fontWeight: '700', fontSize: '1.4rem' }}>Permissions</p>
                    <div className={styles.chechBoxContainer}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Team Lead" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Create users, groups, and other" />
                    </div>
                    <div className={styles.modalBtnContainer}>
                        <Button variant='outlined' onClick={() => setIsModal(false)}>Cancel</Button>
                        <Button type='submit' variant='contained' style={{ background: "#7367F0" }}>Save details</Button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
