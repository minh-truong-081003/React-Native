import React, {useState} from 'react';
import {Facebook, Google }from '../constants/assets/svgs'
import { 
    ButtonComponent, 
    SectionComponent, 
    SpaceComponents,
    TextComponent 
} from '../components';

import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

const SocialLogin = () => {
    return (
        <SectionComponent>
            <TextComponent
            styles={{ textAlign: 'center' }}
            text="OR"
            color={appColors.gray4}
            size={16}
            font={fontFamilies.medium}
        />
        <SpaceComponents height={16} />

        <ButtonComponent 
        type='primary'
        // onPress={handleLoginWithGoogle}
        color='appColors.white'
        textColor='appColors.text'
        text='Login with Google'
        textFont='fontFamilies.regular'
        iconFlex='left'
        icon={<Google />}
        />

        <ButtonComponent
        type='primary'
        // onPress={handleLoginWithFacebook}
        color='appColors.white'
        textColor='appColors.text'
        text='Login with Facebook'
        textFont='fontFamilies.regular'
        iconFlex='left'
        icon={<Facebook />}
        />
        {/* <LoadingModal visible = {isLoading}/> */}
        </SectionComponent>
    );
};

export default SocialLogin;