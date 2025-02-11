function setup_Staff_ThisLessonOnly_Func () {
	
}
function screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func (screen_x_new_num: number, screen_y_new_num: number) {
    led.plotBrightness(screen_X_Old_Num, screen_Y_Old_Num, screen_XY_Brightness_Old_Num)
    screen_X_Old_Num = screen_x_new_num
    screen_Y_Old_Num = screen_y_new_num
    screen_XY_Brightness_Old_Num = led.pointBrightness(screen_x_new_num, screen_y_new_num)
    led.plotBrightness(screen_x_new_num, screen_y_new_num, screenBrightness_Heartbeat_Count_Int)
}
function setup_System_AnyLessonAlways_Func () {
    if (true) {
        setup_VariablesAndConstants_UserCustomizableNot_Func()
        setup_Network_Func()
setup_BotAndController_Func()
setup_Device_ArmServo_Left_Func()
    }
}
function screen_Clear_Func () {
    for (let index_X = 0; index_X <= 4; index_X++) {
        for (let index_Y = 0; index_Y <= 4; index_Y++) {
            if (led.point(index_X, index_Y)) {
                led.unplot(index_X, index_Y)
            }
        }
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Software Reset"
        )
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Give time for other stacks to complete under different concurrent 'SW_ModeState' ..."
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "... to not conflict with following LED Display"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Reset__ID_INT
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            // 1.0 too slow, 0.5 not bad, try 0.20
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(0.2, quest_Time_Units_Enum.Seconds)
        }
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
        control.reset()
    }
})
function bot_Servo_Motors_Basic_Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "forward") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . # . .
                . # # # .
                . . # . .
                . . # . .
                . . . . .
                `)
        } else {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "B-2: Next Block_Code Moddable"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            50,
            50
            )
            screen_Clear_Func()
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
            )
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 0)
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "backward") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . # # # .
                . . # . .
                `)
        } else {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "B-2: Next Block_Code Moddable"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            -50,
            -50
            )
            screen_Clear_Func()
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
            )
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 4)
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "left") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . . . .
                . # . . .
                # # # # .
                . # . . .
                . . . . .
                `)
        } else {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "B-2: Next Block_Code Moddable"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            0,
            50
            )
            screen_Clear_Func()
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
            )
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(0, 2)
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "right") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . . . .
                . . . # .
                . # # # #
                . . . # .
                . . . . .
                `)
        } else {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "B-2: Next Block_Code Moddable"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            50,
            0
            )
            screen_Clear_Func()
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
            )
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(4, 2)
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "stop") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            0,
            0
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Avoid 'screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2,2)' since Screen Conflicts"
            )
        }
    }
}
function bot_Servo_Arms_Fn (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_up") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . . # #
                . . # . .
                # # . . .
                . . . . .
                . . . . .
                `)
        } else {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "If [0|360] is jittery, insure battery at 75% power min."
            )
            servoArm_Now_Degrees_Int = servoArm_UP_MAX_DEGREES_INT
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
            )
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, servoArm_Now_Degrees_Int)
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(3, 2)
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
            "Arm-L:" + "Up= " + servoArm_Now_Degrees_Int,
            0,
            3
            )
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
            "Arm-R:" + "" + "",
            0,
            4
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Avoid 'screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2,2)' since Screen Conflicts"
            )
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "arm_down") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . . . .
                . . . . .
                # # . . .
                . . # . .
                . . . # #
                `)
        } else {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "If [0|360] is jittery, insure battery at 75% power min."
            )
            servoArm_Now_Degrees_Int = servoArm_DOWN_MAX_DEGREES_INT
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "GeekServo-360-Degrees-2kg:360-degrees(not 180-degrees)"
            )
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, servoArm_Now_Degrees_Int)
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(1, 2)
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
            "Arm-L:" + "Down= " + servoArm_Now_Degrees_Int,
            0,
            3
            )
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
            "Arm-R:" + "" + "",
            0,
            4
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Avoid 'screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2,2)' since Screen Conflicts"
            )
        }
    }
}
function setup_Student_ThisLessonOnly_Func () {
	
}
input.onButtonPressed(Button.A, function () {
    if (true) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important Coding Note: Only 1 Input Stack for Button A||B Allowed for 'main/main_backend.ts'"
        )
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Buttons A & B Dual Usage: Usage #2: Given Network_Paired, Increment 'GroupChannelNum' when in Respective Edit Mode"
            )
            device_Mode_Edit_GroupChannelNum_ButtonA_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Buttons A & B Dual Usage: Usage #1: Designate this micro:bit as Controller_Joystick to *Start* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Controller_Joystick:: 1of2 : 1st micro:bit Being Pressed of Button A||B is Designated as Device:Controller_Joystick"
            )
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Controller_Joystick__ID_INT
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            screen_Clear_Func()
            setup_ControllerOnly_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
// BUG FIX: Switch from BlockCode vs TextCode
// let device_Type_Controller_Bool = 0
// 
// let device_Mode_Edit_GroupChannelNum_Bool = 0
// 
// let motor_Power_Gear_02_MAX = 0
// 
// let motor_Power_Gear_01_MAX = 0
// 
// let device_Type_Controller_Bool = 0
function setup_VariablesAndConstants_UserCustomizableNot_Func () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "THIS STACK NOT CUSTOMIZABLE"
        )
        if (true) {
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "Mannual Overrides to fix compiler bug"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "Following assignments prevent variables from being 'grayed' out"
            )
            if (true) {
                // //jwc o device_Type_Bot_Bool = false
                // //jwc o device_Type_Controller_Bool = false
                _system_Hw_DeviceType__Null__ID_INT = 0
                _system_Hw_DeviceType__Bot__ID_INT = 1
                _system_Hw_DeviceType__Controller_Joystick__ID_INT = 2
                if (true) {
                    _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Null__ID_INT
                }
            }
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following Pixels_Max: Horizontal/Vertical: 512 -&- Diagonal: 887 [= sqrt(512^2 + 512^2)]"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Was 15, try 30 to accomodate off_calibrated controllers"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "24-0911-1220 jwc: try 30 to 50 (some joysticks: jittery idle)"
                )
                quest_Note_4.quest_Show_String_For_Note_Small_Func(
                "Optional Advanced Coding: Following Block_Code Moddable"
                )
                controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 50
            }
            if (true) {
                controller__Polar_OriginAtCenter__AngleDegree__Int = 0
                controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int = 0
                controller__Polar_OriginAtCenter__MagnitudePixel__Int = 0
            }
            if (true) {
                motor_Power_Full_Current_Pos = 0
                motor_Power_Full_Current_Neg = 0
                motor_Power_Half_Current = 0
                motor_Power_ZERO_INT = 0
                // //jwc ? // jwc: add to fix compiler error
                // //jwc ? motor_Power_Gear_01_MAX = 0
                // //jwc ? // jwc: add to fix compiler error
                // //jwc ? motor_Power_Gear_02_MAX = 0
                motor_Power_Gear_Number_Int = 0
            }
            if (true) {
                screenBrightness_Heartbeat_Count_Int = 0
            }
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "20msec = 50.0fps (More Noticeable Flicker vs 15msec = 66.7 fps)"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "30fps is min for real-time response"
                )
                screen_Delay_MSEC_INT = 20
            }
            if (true) {
                _system_Sw_ModeState__Null__ID_INT = 0
                _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 1
                _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 2
                _system_Sw_ModeState__Autonomous__ID_INT = 3
                _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 4
                _system_Sw_ModeState__Test__ID_INT = 5
                _system_Sw_ModeState__Reset__ID_INT = 6
                if (true) {
                    _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Null__ID_INT
                }
            }
            if (true) {
                screen_XY_Brightness_Old_Num = 0
                screen_Y_Old_Num = 0
                screen_X_Old_Num = 0
            }
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Big_Func(
                "Variable & Constant: Customizable Settings"
                )
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Gears are not used in Level_1 but need these null declarations... "
                    )
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "...to allow Level_2 code to compile (though unused in Level_1)"
                    )
                    // jwc needed to fix compiler issue
                    motor_Power_Gear_01_MAX = 0
                    // jwc needed to fix compiler issue
                    motor_Power_Gear_02_MAX = 0
                }
                if (true) {
                    wuKong.mecanumWheel(
                    wuKong.ServoList.S1,
                    wuKong.ServoList.S3,
                    wuKong.ServoList.S0,
                    wuKong.ServoList.S2
                    )
                }
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "GeekServo: For servo_360: start at 180"
                    )
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Start w/ Label 'GeekServo' facing out for Servo_Arm_Left, for 180-degrees to face forward for optimum range"
                    )
                    servoArm_Now_Degrees_Int = 180
                    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, servoArm_Now_Degrees_Int)
                    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S6, servoArm_Now_Degrees_Int)
                    if (false) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "Obsolete?"
                        )
                        servoArm_DOWN_MAX_DEGREES_INT = 0
                        servoArm_UP_MAX_DEGREES_INT = 90
                        servoArm_Left_UP_DEGREES_INT = 20
                        servoArm_Right_UP_DEGREES_INT = 45
                        servoArm_Left_Up_Bool = true
                        servoArm_Right_Up_Bool = true
                    }
                }
                if (true) {
                    quest_Dashboard.quest_Show_Oled_Cleared_Func(
                    )
                    quest_Dashboard.quest_Show_String_For_Oled_BigFont_Func(
                    "Hello  : )",
                    0,
                    0
                    )
                }
            }
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
}
input.onButtonPressed(Button.AB, function () {
    // //jwc o if (device_Type_Controller_Bool || device_Type_Bot_Bool) {
    if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT || _system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
        // //jwc o device_Mode_Edit__GroupChannelNum__Bool = !(device_Mode_Edit__GroupChannelNum__Bool)
        // //jwc o if (!(device_Mode_Edit__GroupChannelNum__Bool)) {
        // //jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Func(
        // //jwc o         "If just left 'groupChannel_Edit_Mode', then Reset 'radio set group'"
        // //jwc o     )
        // //jwc o     network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1
        // //jwc o     radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        // //jwc o } else {
        // //jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Func(
        // //jwc o         "If just entered 'groupChannel_Edit_Mode':"
        // //jwc o     )
        // //jwc o     network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 10)
        // //jwc o     network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = network_GroupChannel_MyBotAndController_Base0_Int % 10
        // //jwc o }
        // //jwc o network_GroupChannel_Show_Func()
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 100)
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100, 10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - (network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10), 1)
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Since not enough input buttons to allow manual override of hundreds_digit, will override hundreds_digit to always be 0, to stabilize at a known value"
                )
                network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
            }
        } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1)
            radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        }
    } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
        // //jwc debug: serial.writeLine("HW_Null: SW_Null >> SW_Edit")
        // //jwc debug: serial.writeLine("HW_Null: SW_Edit >> SW_Null")
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Null__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 100)
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100, 10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int - (network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10), 1)
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Since not enough input buttons to allow manual override of hundreds_digit, will override hundreds_digit to always be 0, to stabilize at a known value"
                )
                network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
            }
        } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Null__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int * 100 + (network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1)
            radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        }
    }
    if (false) {
        serial.writeLine("24-0714-2351> " + network_GroupChannel_MyBotAndController_Base0_Int + " " + network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int + " " + network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int + " " + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int)
    }
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "Level 2.1: Variables_n_Constants_Yes"
    )
})
radio.onReceivedString(function (receivedString) {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Network_Message Received' Dual Usage:: Usage #1: Operate Bot from Controller_Joystick"
        )
        // //jwc o if (device_Type_Bot_Bool && _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
        // //jwc o } else if (!(device_Type_Bot_Bool)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            bot_Servo_Motors_Basic_Fn(receivedString)
            bot_Servo_Motors_Turbo_Func(receivedString)
            bot_Servo_Arms_Fn(receivedString)
            network__CpuCycle_Post__Management_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Network_Message Received' Dual Usage:: Usage #2: Designate this micro:bit as Bot to *Complete* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Bot:: 1of1 : 1st micro:bit Having Received a Network_Message is Designated as Device:Bot"
            )
            // //jwc o device_Type_Bot_Bool = true
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Bot__ID_INT
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Start with 'DeviceType' Status to allow screen to stabilize & not clobber a LED for 'GroupChannelNum' Status"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            setup_BotOnly_Func()
if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following Syncs LED-Code w/'Upside-Down' micro:bit"
                )
                display.rotateTo(display.Direction.UpsideDown)
            }
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Insure Following Variable's Value Stabilized.."
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "'network_GroupChannel_MyBotAndController_Base0_Int'"
                )
                quest_Dashboard.quest_Send_LoginOfBot_ToXrayDashboardOfMb_Func(
                network_GroupChannel_MyBotAndController_Base0_Int,
                quest_Toggle_OnOff_Enum.On,
                quest_Debug_Show_Enum.Dashboard_OLED
                )
            }
        }
        if (true) {
            quest_Note_6.quest_Show_String_For_Note_Big_Func(
            "Level 1.0: Variables_n_Constants_Not (Hardcode) ~ Yes: 1-Sec Lag 'show leds'"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "For exclusive activation, place this 'on radio received' stack higher than other 'on radio received' stacks"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "Bot Stack: Main 1of1 ~ 'on radio received(receivedString)'"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Network Message Max_Character_Length: 19"
            )
        }
        if (true) {
            serial.writeLine("* " + receivedString)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important Coding Note: Only 1 Input Stack for Button A||B Allowed for 'main/main_backend.ts'"
        )
        // //jwc o if (!(device_Type_Controller_Bool) && !(device_Type_Bot_Bool)) {
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "'Buttons A & B' Dual Usage: Usage #2: Given Network_Paired, Increment 'GroupChannelNum' when in Respective Edit Mode"
            )
            device_Mode_Edit_GroupChannelNum_ButtonB_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "'Buttons A & B' Dual Usage: Usage #1: Designate this micro:bit as Controller_Joystick to *Start* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Controller_Joystick:: 1of2 : 1st micro:bit Being Pressed of Button A||B is Designated as Device:Controller_Joystick"
            )
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Controller_Joystick__ID_INT
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            screen_Clear_Func()
            setup_ControllerOnly_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
function bot_Servo_Motors_Turbo_Func (network_ReceivedString_FromControllerJoystick_Str_ParamIn: string) {
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "fwd_max") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Next Block_Code Moddable: Forward-Max: Button-F"
            )
            motor_Power_Full_Current_Pos = 100
            // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            motor_Power_Full_Current_Pos,
            motor_Power_Full_Current_Pos
            )
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
            "Motor-L:" + "Forward-Max= " + motor_Power_Full_Current_Pos,
            0,
            1
            )
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
            "Motor-R:" + "Forward-Max= " + motor_Power_Full_Current_Pos,
            0,
            2
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Avoid 'screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2,2)' since Screen Conflicts"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
            )
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 1)
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "turn_max") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Next Block_Code Moddable: Turn-Max: Button-E"
            )
            motor_Power_Full_Current_Pos = 100
            // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            1 * motor_Power_Full_Current_Pos,
            -1 * motor_Power_Full_Current_Pos
            )
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
            "Motor-L:" + "Turn-Max= " + 1 * motor_Power_Full_Current_Pos,
            0,
            1
            )
            quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
            "Motor-R:" + "Turn-Max= " + -1 * motor_Power_Full_Current_Pos,
            0,
            2
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Avoid 'screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2,2)' since Screen Conflicts"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
            )
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 3)
        }
    }
    if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "button_d") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . . # .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
        } else {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Next Block_Code Moddable: Button-D"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
            )
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(3, 2)
        }
    } else if (network_ReceivedString_FromControllerJoystick_Str_ParamIn == "button_c") {
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Block as a Visual-Comment to Avoid Lag"
            )
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . . .
                . # # # .
                . . . . .
                `)
        } else {
            quest_Note_2.quest_Show_String_For_Note_Big_Func(
            "Next Block_Code Moddable: Turn-Max: Button-C"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
            )
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(1, 2)
        }
    }
}
function setup_Device_DataDisplay_Func () {
    if (false) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Following Block as a Visual-Comment to Avoid Lag"
        )
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    quest_Note_2.quest_Show_String_For_Note_Small_Func(
    "AAA-1: Next Block_Code Moddable..."
    )
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "...Data-Dashboard: Row-1: Title"
    )
    quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
    "Data-Dashboard :)",
    0,
    0
    )
}
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "'on button _ is pressed' seems have auto-debounce"
    )
    if (false) {
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            radio.sendString("arm_up")
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(3, 2)
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "20ms(not good), 100ms(worst): Debounce Delay not seem to work"
            )
        }
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "'on button _ is pressed' seems have auto-debounce"
    )
    if (false) {
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            radio.sendString("arm_down")
            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(1, 2)
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "20ms(not good), 100ms(worst): Debounce Delay not seem to work"
            )
        }
    }
})
function pre_setup_System_AnyLessonAlways_Func () {
	
}
function setup_Device_ArmServo_Left_Func () {
    if (false) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Following Block as a Visual-Comment to Avoid Lag"
        )
        basic.showLeds(`
            . . . # #
            . . # . .
            # # . . .
            . . . . .
            . . . . .
            `)
    } else {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "GeekServo-360-Degrees-2kg: start at 180"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Start w/ Label 'GeekServo' facing out for Servo_Arm_Left, for 180-degrees to face forward for optimum range"
        )
        quest_Note_2.quest_Show_String_For_Note_Small_Func(
        "BBB-1: Next Block_Code Moddable..."
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "...Servo-Arm: 1-of-3: Default (degrees)"
        )
        servoArm_DEFAULT_DEGREES_INT = 180
        quest_Note_2.quest_Show_String_For_Note_Small_Func(
        "BBB-2: Next Block_Code Moddable..."
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "...Servo-Arm: 2-of-3: Up-Max (degrees)"
        )
        servoArm_UP_MAX_DEGREES_INT = 360
        quest_Note_2.quest_Show_String_For_Note_Small_Func(
        "BBB-3: Next Block_Code Moddable..."
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "...Servo-Arm: 3-of-3: Down-Max (degrees)"
        )
        servoArm_DOWN_MAX_DEGREES_INT = 0
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Servo-Arm: GeekServo_360_Degrees: Default"
        )
        servoArm_Now_Degrees_Int = servoArm_DEFAULT_DEGREES_INT
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, servoArm_Now_Degrees_Int)
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
        "Arm-L:" + "Default= " + servoArm_Now_Degrees_Int,
        0,
        3
        )
        quest_Dashboard.quest_Show_String_For_Oled_SmallFont_Func(
        "Arm-R:",
        0,
        4
        )
    }
}
let servoArm_DEFAULT_DEGREES_INT = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
let servoArm_Right_Up_Bool = false
let servoArm_Left_Up_Bool = false
let servoArm_Right_UP_DEGREES_INT = 0
let servoArm_Left_UP_DEGREES_INT = 0
let motor_Power_Gear_02_MAX = 0
let motor_Power_Gear_01_MAX = 0
let _system_Sw_ModeState__Test__ID_INT = 0
let _system_Sw_ModeState__Autonomous__ID_INT = 0
let _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 0
let _system_Sw_ModeState__Null__ID_INT = 0
let screen_Delay_MSEC_INT = 0
let motor_Power_Gear_Number_Int = 0
let motor_Power_ZERO_INT = 0
let motor_Power_Half_Current = 0
let motor_Power_Full_Current_Neg = 0
let motor_Power_Full_Current_Pos = 0
let controller__Polar_OriginAtCenter__MagnitudePixel__Int = 0
let controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int = 0
let controller__Polar_OriginAtCenter__AngleDegree__Int = 0
let controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 0
let _system_Hw_DeviceType__Bot__ID_INT = 0
let _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 0
let _system_Hw_DeviceType__Controller_Joystick__ID_INT = 0
let _system_Hw_DeviceType__Null__ID_INT = 0
let _system_Hw_DeviceType__Now__Id_Int = 0
let _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 0
let servoArm_DOWN_MAX_DEGREES_INT = 0
let servoArm_UP_MAX_DEGREES_INT = 0
let servoArm_Now_Degrees_Int = 0
let _system_Sw_ModeState__Reset__ID_INT = 0
let _system_Sw_ModeState__Now__Id_Int = 0
let screenBrightness_Heartbeat_Count_Int = 0
let screen_XY_Brightness_Old_Num = 0
let screen_Y_Old_Num = 0
let screen_X_Old_Num = 0
let network_GroupChannel_MyBotAndController_Base0_Int = 0
pre_setup_System_AnyLessonAlways_Func()
if (false) {
    quest_Note_1.quest_Show_String_For_Note_Small_Func(
    "Following Block as a Visual-Comment to Avoid Lag"
    )
    basic.showLeds(`
        . # . # .
        # # # # #
        . # . # .
        # # # # #
        . # . # .
        `)
} else {
    quest_Note_2.quest_Show_String_For_Note_Small_Func(
    "Set GroupChannel_# (Bot_Id): Range [21 to 255], Default = 1"
    )
    quest_Note_2.quest_Show_String_For_Note_Big_Func(
    "B-1: Next Block_Code Moddable: Group-Channel-#"
    )
    network_GroupChannel_MyBotAndController_Base0_Int = 1
}
setup_System_AnyLessonAlways_Func()
setup_Staff_ThisLessonOnly_Func()
quest_Note_1.quest_Show_String_For_Note_Big_Func(
"©️ 2025 Quest Institute. All rights reserved."
)
quest_Note_2.quest_Show_String_For_Note_Big_Func(
"Student Setup-Code Can Start Below.."
)
basic.forever(function () {
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "<-- Bot Code (Web-Server)  |"
        )
    }
})
basic.forever(function () {
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "|  Controller-Joystick (Web-Client) -->"
        )
    }
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Joystick"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (true) {
                controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOf_AsIntOut_Func(
                quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum.degree_90
                )
                controller__Polar_OriginAtCenter__MagnitudePixel__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func(
                )
                if (false) {
                    controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOfDegree90_AsIntOut_Func(
                    )
                }
            }
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Convert Network Message to Operate 'B'ot: "
            )
            if (controller__Polar_OriginAtCenter__MagnitudePixel__Int >= controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT) {
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Big_Func(
                    "Motion: Yes"
                    )
                    if (controller__Polar_OriginAtCenter__AngleDegree__Int == 90) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: North"
                            )
                            if (false) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "Following Block as a Visual-Comment to Avoid Lag"
                                )
                                basic.showLeds(`
                                    . . # . .
                                    . # # # .
                                    . . # . .
                                    . . # . .
                                    . . . . .
                                    `)
                            } else {
                                radio.sendString("forward")
                                screen_Clear_Func()
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 0)
                            }
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 270) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: South"
                            )
                            if (false) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "Following Block as a Visual-Comment to Avoid Lag"
                                )
                                basic.showLeds(`
                                    . . . . .
                                    . . # . .
                                    . . # . .
                                    . # # # .
                                    . . # . .
                                    `)
                            } else {
                                radio.sendString("backward")
                                screen_Clear_Func()
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 4)
                            }
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 180) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: West"
                            )
                            if (false) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "Following Block as a Visual-Comment to Avoid Lag"
                                )
                                basic.showLeds(`
                                    . . . . .
                                    . # . . .
                                    # # # # .
                                    . # . . .
                                    . . . . .
                                    `)
                            } else {
                                radio.sendString("left")
                                screen_Clear_Func()
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(0, 2)
                            }
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 0 || controller__Polar_OriginAtCenter__AngleDegree__Int == 360) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: East"
                            )
                            if (false) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "Following Block as a Visual-Comment to Avoid Lag"
                                )
                                basic.showLeds(`
                                    . . . . .
                                    . . . # .
                                    . # # # #
                                    . . . # .
                                    . . . . .
                                    `)
                            } else {
                                radio.sendString("right")
                                screen_Clear_Func()
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(4, 2)
                            }
                        }
                    } else {
                        quest_Note_5.quest_Show_String_For_Note_Small_Func(
                        "Invalid 'controller_Joystick_Angle_Degrees_AsIncremented_Int'"
                        )
                        error_Message_Func("2024-0212-1731", "Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'")
                    }
                    if (false) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'"
                        )
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space"
                        )
                    }
                }
            } else if (controller__Polar_OriginAtCenter__MagnitudePixel__Int < controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT) {
                quest_Note_1.quest_Show_String_For_Note_Big_Func(
                "Motion: Not"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Zero values if not exceed 'Deadzone_AsIdle'"
                )
                radio.sendString("stop")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 2)
                }
            }
            if (true) {
                serial.writeLine("*** " + "Joy_X:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                joystickbit.getRockerValue(joystickbit.rockerType.X),
                8,
                2
                ) + " Joy_Y:" + quest_General.quest_Get_Number_WithColumnPadding_AsStringOut_Func(
                joystickbit.getRockerValue(joystickbit.rockerType.Y),
                8,
                2
                ))
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes ~ Yes: 1-Sec Lag 'show leds'"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Activate Stack via 'Forever' Stack_Header"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 1of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
    }
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Buttons"
        )
        quest_Note_6.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 2of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Block as a Visual-Comment to Avoid Lag"
                    )
                    basic.showLeds(`
                        . . # . .
                        . # # # .
                        # . # . #
                        . . # . .
                        . . # . .
                        `)
                } else if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Big_Func(
                    "Controller_Joystick: gear_lo"
                    )
                    motor_Power_Gear_Number_Int = 1
                    radio.sendString("fwd_max")
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 1)
                }
            } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Block as a Visual-Comment to Avoid Lag"
                    )
                    basic.showLeds(`
                        . . # . .
                        . . . # .
                        # # # # #
                        . . . # .
                        . . # . .
                        `)
                } else if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Big_Func(
                    "Controller_Joystick: gear_hi"
                    )
                    motor_Power_Gear_Number_Int = 2
                    radio.sendString("turn_max")
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 3)
                }
            } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Block as a Visual-Comment to Avoid Lag"
                    )
                    basic.showLeds(`
                        . . . # .
                        . # # # .
                        . # . # .
                        . # # # .
                        . . . . .
                        `)
                } else if (true) {
                    radio.sendString("button_d")
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(3, 2)
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "20ms(not good), 100ms(worst): Debounce Delay not seem to work"
                    )
                }
            } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Block as a Visual-Comment to Avoid Lag"
                    )
                    basic.showLeds(`
                        . . . . .
                        . # # # .
                        . # . . .
                        . # # # .
                        . . . . .
                        `)
                } else if (true) {
                    radio.sendString("button_c")
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5: (0,0):Upper_Left, (4,4):Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(1, 2)
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "20ms(not good), 100ms(worst): Debounce Delay not seem to work"
                    )
                }
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
basic.forever(function () {
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "'On Logo Pressed'"
    )
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "24-0916-0620 Deactivate Servo_Motor[_Left|_Right] Diagnostic Test, Since Complicates UI"
    )
    if (false) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Built-In Diagnsotic Test for Both Servo_Motors L & R"
        )
        if (_system_Hw_DeviceType__Now__Id_Int != _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Above 'if' condition prevent this diag test from running on 'Controller' yet allowable for any other devices, e.g. 'Bot'."
            )
            if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Autonomous__ID_INT) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
                )
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Test__ID_INT
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: Left Only"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "50% Power for Medium Speed"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "0% Power for Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        50,
                        0
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . # . . .
                            # # # . .
                            . # . . .
                            . # . . .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: Right Only"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "50% Power for Medium Speed"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "0% Power for Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        0,
                        50
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . . . # .
                            . . # # #
                            . . . # .
                            . . . # .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: Left + Right"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "50% Power for Medium Speed"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "0% Power for Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        50,
                        50
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . # . # .
                            # # # # #
                            . # . # .
                            . # . # .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: All Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        0,
                        0
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: All Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        0,
                        0
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . # . # .
                            `)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                "Just exited the above_conditioned 'if then' state and will process accordingly as needed:"
                )
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
            }
        }
    }
})
basic.forever(function () {
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "'on radio received 'receivedString''"
    )
    if (false) {
        if (true) {
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "For exclusive activation, place this 'on radio received' stack higher than other 'on radio received' stacks"
            )
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Network_Message Received' Dual Usage:: Usage #1: Operate Bot from Controller_Joystick"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "Bot Stack: Main 1of1 ~ 'on radio received(receivedString)'"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Network Message Max_Character_Length: 19"
            )
            if (true) {
                // //jwc o if (device_Type_Bot_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
                // //jwc o } else if (!(device_Type_Bot_Bool)) {
                if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
                    if (true) {
                        let _system_ReceivedString_Temp_Placeholder = ""
                        if (_system_ReceivedString_Temp_Placeholder == "forward") {
                            quest_Note_2.quest_Show_String_For_Note_Small_Func(
                            "Following Block_Code Moddable"
                            )
                            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                            motor_Power_Full_Current_Pos,
                            motor_Power_Full_Current_Pos
                            )
                            quest_Note_4.quest_Show_String_For_Note_Small_Func(
                            "Reliable/Faster Response If Screen_Led_Graphics After Important Action Blocks Above"
                            )
                            basic.showLeds(`
                                . . # . .
                                . # # # .
                                . . # . .
                                . . # . .
                                . . . . .
                                `)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Clear Screen Right After"
                            )
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                `)
                        } else if (_system_ReceivedString_Temp_Placeholder == "backward") {
                            quest_Note_2.quest_Show_String_For_Note_Small_Func(
                            "Following Block_Code Moddable"
                            )
                            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                            motor_Power_Full_Current_Neg,
                            motor_Power_Full_Current_Neg
                            )
                            quest_Note_4.quest_Show_String_For_Note_Small_Func(
                            "Reliable/Faster Response If Screen_Led_Graphics After Important Action Blocks Above"
                            )
                            basic.showLeds(`
                                . . . . .
                                . . # . .
                                . . # . .
                                . # # # .
                                . . # . .
                                `)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Clear Screen Right After"
                            )
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                `)
                        } else if (_system_ReceivedString_Temp_Placeholder == "left") {
                            quest_Note_2.quest_Show_String_For_Note_Small_Func(
                            "Following Block_Code Moddable"
                            )
                            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                            motor_Power_ZERO_INT,
                            motor_Power_Full_Current_Pos
                            )
                            quest_Note_4.quest_Show_String_For_Note_Small_Func(
                            "Reliable/Faster Response If Screen_Led_Graphics After Important Action Blocks Above"
                            )
                            basic.showLeds(`
                                . . . . .
                                . # . . .
                                # # # # .
                                . # . . .
                                . . . . .
                                `)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Clear Screen Right After"
                            )
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                `)
                        } else if (_system_ReceivedString_Temp_Placeholder == "right") {
                            quest_Note_2.quest_Show_String_For_Note_Small_Func(
                            "Following Block_Code Moddable"
                            )
                            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                            motor_Power_Full_Current_Pos,
                            motor_Power_ZERO_INT
                            )
                            quest_Note_4.quest_Show_String_For_Note_Small_Func(
                            "Reliable/Faster Response If Screen_Led_Graphics After Important Action Blocks Above"
                            )
                            basic.showLeds(`
                                . . . . .
                                . . . # .
                                . # # # #
                                . . . # .
                                . . . . .
                                `)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Clear Screen Right After"
                            )
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                `)
                        } else if (_system_ReceivedString_Temp_Placeholder == "stop") {
                            quest_Note_2.quest_Show_String_For_Note_Small_Func(
                            "Following Block_Code Moddable"
                            )
                            // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
                            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                            motor_Power_ZERO_INT,
                            motor_Power_ZERO_INT
                            )
                            if (true) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 2)
                            }
                        } else if (_system_ReceivedString_Temp_Placeholder == "gear_lo") {
                            if (true) {
                                // //jwc o ? let motor_Power_Gear_01_MAX = 0
                                motor_Power_Full_Current_Pos = motor_Power_Gear_01_MAX
                                motor_Power_Full_Current_Neg = -1 * motor_Power_Full_Current_Pos
                                motor_Power_Half_Current = Math.round(0.5 * motor_Power_Full_Current_Pos)
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 3)
                            }
                        } else if (_system_ReceivedString_Temp_Placeholder == "gear_hi") {
                            if (true) {
                                // /jwc o ? let motor_Power_Gear_02_MAX = 0
                                motor_Power_Full_Current_Pos = motor_Power_Gear_02_MAX
                                motor_Power_Full_Current_Neg = -1 * motor_Power_Full_Current_Pos
                                motor_Power_Half_Current = Math.round(0.5 * motor_Power_Full_Current_Pos)
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 1)
                            }
                        } else {
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Error: Unknown Msg"
                            )
                            // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
                            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                            motor_Power_ZERO_INT,
                            motor_Power_ZERO_INT
                            )
                            if (true) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "For now, all 4 corners = Error: Unknown Msg"
                                )
                                quest_Note_6.quest_Show_String_For_Note_Small_Func(
                                "ERROR_MESSAGE_TOBE_REPLACED"
                                )
                                screen_IconMessage_Func("error")
                            }
                        }
                        network__CpuCycle_Post__Management_Func()
                    }
                } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
                    quest_Note_3.quest_Show_String_For_Note_Big_Func(
                    "Network_Message Received' Dual Usage:: Usage #2: Designate this micro:bit as Bot to *Finish* Network_Pairing w/ Controller_Joystick"
                    )
                    quest_Note_1.quest_Show_String_For_Note_Big_Func(
                    "Code Activation of Bot:: 1of1 : 1st micro:bit Having Received a Network_Message is Designated as Device:Bot"
                    )
                    _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Bot__ID_INT
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Start with 'DeviceType' Status to allow screen to stabilize & not clobber a LED for 'GroupChannelNum' Status"
                    )
                    _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
                    setup_BotOnly_Func()
                }
            }
            quest_Note_6.quest_Show_String_For_Note_Big_Func(
            "Level 2: Variables_n_Constants_Yes"
            )
        }
    }
})
basic.forever(function () {
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    ""
    )
    if (false) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Error: Unknown Msg"
        )
        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        0,
        0
        )
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "For now, all 4 corners = Error: Unknown Msg"
            )
            screen_IconMessage_Func("error")
        }
    }
})
basic.forever(function () {
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "'on start'"
    )
    if (false) {
        if (true) {
            quest_Note_4.quest_Show_String_For_Note_Small_Func(
            "For exclusive activation, place this 'on start' stack higher than other 'on start' stacks"
            )
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Bot & Controller_Joystick: All_in_One Code"
            )
            quest_Note_6.quest_Show_String_For_Note_Small_Func(
            "Bot & Controller_Joystick Stack: 'on start'"
            )
            if (true) {
                quest_Note_6.quest_Show_String_For_Note_Small_Func(
                "setup_VariablesAndConstants_UserCustomizable: Yes"
                )
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Set GroupChannel_# for Both Bot & Controller_Joystick: Default = 1"
                    )
                    quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Following Block_Code Moddable"
                    )
                    network_GroupChannel_MyBotAndController_Base0_Int = 1
                }
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Pixels_Max: Horizontal/Vertical: 512 -&- Diagonal: 887 [= sqrt(512^2 + 512^2)]"
                    )
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Was 15, try 30 to accomodate off_calibrated controllers"
                    )
                    quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Following Block_Code Moddable"
                    )
                    controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 30
                }
                // //jwc debug:  serial.writeLine("*** 24-0323-1921: " + convertToText(motor_Power_Gear_01_MAX) + " " + convertToText(motor_Power_Full_Current_Pos))
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Perhaps too fast: 30 & 60 for Gears 1 & 2, Respectively"
                    )
                    quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Following Block_Code Moddable"
                    )
                    // Was 30
                    motor_Power_Gear_01_MAX = 15
                    quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Following Block_Code Moddable"
                    )
                    // Was 60
                    motor_Power_Gear_02_MAX = 30
                }
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Values Vary for Each Bot"
                    )
                    quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Following Block_Code Moddable"
                    )
                    servoArm_DOWN_MAX_DEGREES_INT = 90
                    quest_Note_2.quest_Show_String_For_Note_Small_Func(
                    "Following Block_Code Moddable"
                    )
                    servoArm_Left_UP_DEGREES_INT = 0
                }
            }
            if (true) {
                setup_VariablesAndConstants_UserCustomizableNot_Func()
                setup_Network_Func()
setup_BotAndController_Func()
            }
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2: Variables_n_Constants_Yes"
        )
    }
})
loops.everyInterval(3600000, function () {
    quest_Note_6.quest_Show_String_For_Note_Small_Func(
    "Above stack is practically a 'non-executing' stack that does not tie up cpu_resources with its 1 hour (3600,000)"
    )
    quest_Note_6.quest_Show_String_For_Note_Small_Func(
    "Also the 'if(false)' mini-stacks will be skipped by cpu, for further non-resource burdening"
    )
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Very Important Notes"
        )
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Levels 1, 2, 2.1"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 1: Hardcoded Static via Actual_Numbers for MotorPower%"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 2: Softcoded Dynamic via Variables/Constants for MotorPower% "
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 2.1 Add Controller_Joystick * Level 2.2 Add Gear 3 (90%?)"
            )
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Basic Comment_Colors Usage:: Black: Very Big Picture, Blue: Big Picture, Green: Following Block_Code Moddable, Orange: Question/TODO, Magenta: Special Multi-Purpose "
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "micro:bit Ver2 Warning during Download is Ignorable Yet Courteously Helpful"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'if_then' mini-stacks useful for modular 3-D code select/duplicate/move/delete"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Light_Gray Functions non-editable (backend staff-use code only)"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "For Group_CHannel_# (Bot_Id): Propose: 1-10 Staff Use, 11-99 Student Use"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "SW Reset: Long_Press Logo for 3 sec min"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Built-in Diagnostic Test: Short_Press Logo for 1 sec max"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'Blocks' Window homes 'on start'_stack as top_left corner of editor_screen, until 'on start' is moved below, then next stack to right presides"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "All These Levels are Intermediate Level Coding due to Networking Pairing Involved.  Basic Diagnostic Servo_Motors (Autonomoous) is Beginner Level."
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "This Intermediate Level Network_Pairing has 1sec_Lag Response Time; The Other Advanced Level Network_Pairing has Real_Time Response Time."
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "For Level 1, can keep 'Forward: set manual_servo_motors' Block functional, yet reset to 0 all other 'set manual_servo_motors' Blocks for Discovery Learning"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "If duplicate stacks exist, then the highest stack is active and others are non_active"
        )
    }
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Important Notes"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Upon open file, Editor zooms in on closest stack to right of original_origin from project_creation"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Semantic Naming prefers '_' vs. '-' since latter can be conufused with minus_sign"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'every 360000 ms' (1 hour) Stacks can be ignored, esp w/ 'if false' embedded"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Avoid using 'show leds' Block since will cause lag & degrade real-time response"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Seems like 'signficant' changes to JavaScript can activate 'format code', rearrange stacks to original position"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important 'system' variables are 1) _system_Hw_DeviceType__* (Hw=Hardware) and 2) _system_Sw_ModeState__* (Sw=Software)"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If Buttons C-F for Gears/Misc, Maybe 'Logo Up/Down' for 'Servo_Arm Up/Down'"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'Rotatedisplay' could be used on Bot's Led_Screen, but causes light flickering on bottom row, so maybe avoid"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Reliable/Faster Response If Screen_Led_Graphics After Important Action Blocks Above"
        )
        if (false) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Main upgrade from Lv1 to Lv2 is replacing cpu_laggy 'show leds' block with cpu_fast 'plox x _ y _' block, such as below: "
            )
            if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "West"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(4, 2)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "North"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 0)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "East"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 4)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "South"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(0, 2)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Idle: Neutral"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 2)
            } else {
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Gear: Lo"
                    )
                    led.plot(2, 3)
                } else {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Gear: Hi"
                    )
                    led.plot(2, 1)
                }
            }
        }
    }
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Notes"
        )
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Bug Resolved: TYJ"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "////jwc n may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at Blocks: on start stack: root level: error_Message_Func(\"2024-0212-1730\", convertToText(controller__Polar_OriginAtCenter__AngleDegree__Int))"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Fix: 'error_Message_Func(\"2024-0212-1730\", \"Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'\")'"
            )
            if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "KINDLY IGNORE:: COMPILER ISSUE: NEED FOLLOING UNUSUAL VARIABLE DECLARATION BY COMPILER"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following Always First Line of This 'on start' Stack by Compiler."
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Can Move Anywhere on Same Stack, But Needs to Stay Root Level (Main_Stack), e.g. Not Nested in Sub/Mini_Stack"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "* Current variable below is: 'controller__Polar_OriginAtCenter__AngleDegree__Int'"
                )
            }
        }
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space"
            )
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "When activating a 'on Radio Received' stack, replace 'receivedString_TO_BE_REPLACED_BY_ONrADIOrECEIVED_STACK' with 'receivedString'"
        )
    }
})
