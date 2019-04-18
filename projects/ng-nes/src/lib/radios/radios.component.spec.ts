import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadiosComponent, RadiosComponentProps } from './radios.component';
import { FormsModule } from '@angular/forms';
import { getMultipleNativeElements, getSingleNativeElement } from '../../test-helpers';
import { Option } from './model/option';

describe('RadiosComponent', () => {
  let testSubject: RadiosComponent;
  let fixture: ComponentFixture<RadiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiosComponent ],
      imports: [ FormsModule ]
    });

    fixture = TestBed.createComponent(RadiosComponent);
    testSubject = fixture.componentInstance;

    testSubject.props = {
      options: [
        {value: 'valueOne', label: 'labelOne'}
      ]
    } as RadiosComponentProps;
  }));

  describe('render', () => {

    it('creates a label with the class "nes-radio-group" to act as a parent element for the group', () => {
      // Given
      const expectedTagName = 'LABEL';

      // When
      fixture.detectChanges();

      // Then
      const groupLabel = getSingleNativeElement(fixture, '.nes-radio-group');
      expect(groupLabel).toBeTruthy();
      expect(groupLabel.tagName).toEqual(expectedTagName);
    });

    it('creates the number of radio inputs that props.options has', () => {
      // Given
      const someOptions: Option[] = [
        {value: 'valueOne', label: 'labelOne'},
        {value: 'valueOne', label: 'labelOne'},
      ];
      const expectedLength = someOptions.length;
      testSubject.props.options = someOptions;

      // When
      fixture.detectChanges();

      // Then
      expect(getMultipleNativeElements(fixture, '.nes-radio').length).toEqual(expectedLength);
    });

    it('adds inline style on the group label', () => {
        // Given
        const expectedStyle = 'blue';
        testSubject.props.style = {background: expectedStyle};

        // When
        fixture.detectChanges();

        // Then
        expect(getSingleNativeElement(fixture, '.nes-radio-group').style.background).toEqual(expectedStyle);
    });
  });

  describe('#ngOnInit()', () => {
    const errorText = 'nes-radios requires at least 1 option';

    it('errors if props.options has not been given', () => {
      // Given
      testSubject.props.options = null;

      // Then
      expect(() => testSubject.ngOnInit()).toThrowError(errorText);
    });

    it('errors if props.options has been given but is an empty array', () => {
      // Given
      testSubject.props.options = [];

      // Then
      expect(() => testSubject.ngOnInit()).toThrowError(errorText);
    });
  });

  describe('#onSelect()', () => {

    it('emits currentSelected string', () => {
      // Given
      const someSelectedText = 'selected';
      spyOn(testSubject.radioSelected, 'emit');
      testSubject.currentSelected = someSelectedText;

      // When
      testSubject.onSelect();

      // Then
      expect(testSubject.radioSelected.emit).toHaveBeenCalledWith(someSelectedText);
    });
  });
});
