function screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func (screen_x_new_num: number, screen_y_new_num: number) {
    quest_Note_4.quest_Show_String_For_Note_Small_Func(
    "TODO: Migrate to 'Main_Backend.ts'"
    )
    led.plotBrightness(screen_X_Old_Num, screen_Y_Old_Num, screen_XY_Brightness_Old_Num)
    screen_X_Old_Num = screen_x_new_num
    screen_Y_Old_Num = screen_y_new_num
    screen_XY_Brightness_Old_Num = led.pointBrightness(screen_x_new_num, screen_y_new_num)
    led.plotBrightness(screen_x_new_num, screen_y_new_num, screenBrightness_Heartbeat_Count_Int)
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
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
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
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
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
            quest_Note_5.quest_Show_String_For_Note_Small_Func(
            "Mannual Overrides to fix compiler bug"
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
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = network_GroupChannel_MyBotAndController_Base0_Int % 10
        } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "Just exited the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1
            radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        }
    } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
        // //jwc debug: serial.writeLine("HW_Null: SW_Null >> SW_Edit")
        // //jwc debug: serial.writeLine("HW_Null: SW_Edit >> SW_Null")
        if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Null__ID_INT) {
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT
            network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = Math.idiv(network_GroupChannel_MyBotAndController_Base0_Int, 10)
            network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = network_GroupChannel_MyBotAndController_Base0_Int % 10
        } else if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT) {
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Null__ID_INT
            network_GroupChannel_MyBotAndController_Base0_Int = network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int * 10 + network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int * 1
            radio.setGroup(network_GroupChannel_MyBotAndController_Base0_Int)
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
radio.onReceivedString(function (receivedString) {
    if (true) {
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "For exclusive activation, place this 'on radio received' stack higher than other 'on radio received' stacks"
        )
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Network_Message Received' Dual Usage:: Usage #1: Operate Bot from Controller_Joystick"
        )
        quest_Note_5.quest_Show_String_For_Note_Small_Func(
        "Bot Stack: Main 1of1 ~ 'on radio received(receivedString)'"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
        if (true) {
            // //jwc o if (device_Type_Bot_Bool && _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
            // //jwc o } else if (!(device_Type_Bot_Bool)) {
            if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
                if (true) {
                    if (receivedString == "forward") {
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "Following Block_Code Moddable"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        15,
                        15
                        )
                        if (true) {
                            quest_Note_4.quest_Show_String_For_Note_Small_Func(
                            "Faster Response If Use 'plot x _ y _ ' vs 'show leds' -as well as- After Important Action Blocks Above"
                            )
                            led.toggle(2, 0)
                            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(screen_Delay_MSEC_INT, quest_Time_Units_Enum.Milliseconds)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Clear Screen Right After"
                            )
                            led.toggle(2, 0)
                        }
                    } else if (receivedString == "backward") {
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "Following Block_Code Moddable"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        -15,
                        -15
                        )
                        if (true) {
                            quest_Note_4.quest_Show_String_For_Note_Small_Func(
                            "Faster Response If Use 'plot x _ y _ ' vs 'show leds' -as well as- After Important Action Blocks Above"
                            )
                            led.toggle(2, 4)
                            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(screen_Delay_MSEC_INT, quest_Time_Units_Enum.Milliseconds)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Clear Screen Right After"
                            )
                            led.toggle(2, 4)
                        }
                    } else if (receivedString == "left") {
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "Following Block_Code Moddable"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        0,
                        15
                        )
                        if (true) {
                            quest_Note_4.quest_Show_String_For_Note_Small_Func(
                            "Faster Response If Use 'plot x _ y _ ' vs 'show leds' -as well as- After Important Action Blocks Above"
                            )
                            led.toggle(0, 2)
                            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(screen_Delay_MSEC_INT, quest_Time_Units_Enum.Milliseconds)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Clear Screen Right After"
                            )
                            led.toggle(0, 2)
                        }
                    } else if (receivedString == "right") {
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "Following Block_Code Moddable"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        15,
                        0
                        )
                        if (true) {
                            quest_Note_4.quest_Show_String_For_Note_Small_Func(
                            "Faster Response If Use 'plot x _ y _ ' vs 'show leds' -as well as- After Important Action Blocks Above"
                            )
                            led.toggle(4, 2)
                            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(screen_Delay_MSEC_INT, quest_Time_Units_Enum.Milliseconds)
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "Clear Screen Right After"
                            )
                            led.toggle(4, 2)
                        }
                    } else if (receivedString == "stop") {
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "Following Block_Code Moddable"
                        )
                        // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        0,
                        0
                        )
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Small_Func(
                            "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                            )
                            screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 2)
                        }
                    } else {
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
                            error_Message_Func("2024-0213-1700", receivedString)
screen_IconMessage_Func("error")
                        }
                    }
                    network__CpuCycle_Post__Management_Func()
                }
            } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
                quest_Note_3.quest_Show_String_For_Note_Big_Func(
                "Network_Message Received' Dual Usage:: Usage #2: Designate this micro:bit as Bot to *Complete* Network_Pairing w/ Bot"
                )
                quest_Note_1.quest_Show_String_For_Note_Big_Func(
                "Code Activation of Bot:: 1of1 : 1st micro:bit Having Received a Network_Message is Designated as Device:Bot"
                )
                // //jwc o device_Type_Bot_Bool = true
                _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Bot__ID_INT
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
                setup_BotOnly_Func()
            }
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 1.1: Variables_n_Constants_Not (Hardcode) ~ No: 1-Sec Lag 'show leds'"
        )
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
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
            screen_Clear_Func()
setup_ControllerOnly_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (true) {
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
let network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
let _system_Sw_ModeState__Test__ID_INT = 0
let _system_Sw_ModeState__Autonomous__ID_INT = 0
let _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 0
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
let _system_Hw_DeviceType__Bot__ID_INT = 0
let _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 0
let _system_Hw_DeviceType__Controller_Joystick__ID_INT = 0
let _system_Hw_DeviceType__Null__ID_INT = 0
let _system_Hw_DeviceType__Now__Id_Int = 0
let _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 0
let _system_Sw_ModeState__Reset__ID_INT = 0
let _system_Sw_ModeState__Now__Id_Int = 0
let screenBrightness_Heartbeat_Count_Int = 0
let screen_XY_Brightness_Old_Num = 0
let screen_Y_Old_Num = 0
let screen_X_Old_Num = 0
let servoArm_UP_DEGREES_INT = 0
let servoArm_DOWN_DEGREES_INT = 0
let motor_Power_Gear_02_MAX = 0
let motor_Power_Gear_01_MAX = 0
let controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 0
let network_GroupChannel_MyBotAndController_Base0_Int = 0
if (true) {
    quest_Note_4.quest_Show_String_For_Note_Small_Func(
    "For exclusive activation, place this 'on start' stack higher than other 'on start' stacks"
    )
    quest_Note_3.quest_Show_String_For_Note_Big_Func(
    "Bot & Controller_Joystick: All_in_One Code"
    )
    quest_Note_5.quest_Show_String_For_Note_Small_Func(
    "Bot & Controller_Joystick Stack: 'on start'"
    )
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
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
            servoArm_DOWN_DEGREES_INT = 90
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "Following Block_Code Moddable"
            )
            servoArm_UP_DEGREES_INT = 0
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
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Joystick"
        )
        quest_Note_5.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 1of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
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
                            radio.sendString("forward")
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
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 270) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: South"
                            )
                            radio.sendString("backward")
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
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 180) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: West"
                            )
                            radio.sendString("left")
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
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 0 || controller__Polar_OriginAtCenter__AngleDegree__Int == 360) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: East"
                            )
                            radio.sendString("right")
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
                    "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 2)
                }
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes ~ Yes: 1-Sec Lag 'show leds'"
        )
    }
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Buttons"
        )
        quest_Note_5.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 2of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
                quest_Note_1.quest_Show_String_For_Note_Big_Func(
                "Controller_Joystick: gear_lo"
                )
                motor_Power_Gear_Number_Int = 1
                radio.sendString("gear_lo")
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 3)
            } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
                quest_Note_1.quest_Show_String_For_Note_Big_Func(
                "Controller_Joystick: gear_hi"
                )
                motor_Power_Gear_Number_Int = 2
                radio.sendString("gear_hi")
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 1)
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
basic.forever(function () {
	
})
loops.everyInterval(3600000, function () {
    quest_Note_5.quest_Show_String_For_Note_Small_Func(
    "Above stack is practically a 'non-executing' stack that does not tie up cpu_resources with its 1 hour (3600,000)"
    )
    quest_Note_5.quest_Show_String_For_Note_Small_Func(
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
